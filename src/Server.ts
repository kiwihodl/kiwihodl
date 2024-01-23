import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import { createServer } from "http";
import { Pool } from "pg";
import bcrypt from 'bcrypt';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import jwt from 'jsonwebtoken'; 

const pool = new Pool({
  user: "kiwi",
  host: "localhost",
  database: "kiwiwebappdb",
  password: "Tehani93!",
  port: 5432,
});

// Implement the generateTokenForUser function
function generateTokenForUser(user: any) {
  return jwt.sign({ id: user.id }, 'your-secret-key'); // Replace 'your-secret-key' with your actual secret key
}

const resolvers = {
  Query: {
    getUsers: async () => {
      const result = await pool.query("SELECT * FROM users");
      return result.rows;
    },
  },
  Mutation: {
    signup: async (_: any, { input }: { input: any }) => {
        const { email, password } = input;
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
          "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
          [email, hashedPassword]
        );
        const newUser = result.rows[0];


        // Check if a user with the given email already exists
        const existingUserResult = await pool.query(
          "SELECT * FROM users WHERE email = $1",
          [email]
        );
        if (existingUserResult.rows.length > 0) {
          throw new Error("A user with this email already exists");
        }

        // Generate a token for the new user
        const token = generateTokenForUser(newUser);

        return { token, user: newUser }; // Return an AuthPayload object
      },
      loginUser: async (_: any, { input }: { input: any }) => {
        const { email, password } = input;
        const result = await pool.query(
          "SELECT * FROM users WHERE email = $1",
          [email]
        );
        const user = result.rows[0];
      
        if (!user || !(await bcrypt.compare(password, user.password))) {
          throw new Error("Invalid credentials");
        }
      
        // Generate a token for the logged in user
        const token = generateTokenForUser(user);
      
        // Return an AuthPayload object
        return { token, user };
      },
  },
};

const typeDefs = gql`
  type Query {
    getUsers: [User]
  }

  type Mutation {
    signup(input: UserInput): AuthPayload
    loginUser(input: LoginInput): User
  }

  input UserInput {
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type User {
    id: ID
    name: String
    email: String
  }

  type AuthPayload {
    token: String!
    user: User!
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
  schema,
});

const app = express();

// Start the server before applying middleware
(async () => {
  await server.start();
  server.applyMiddleware({ app });

  const httpServer = createServer(app);

  SubscriptionServer.create({
    schema,
    execute,
    subscribe,
  }, {
    server: httpServer,
    path: server.graphqlPath,
  });

  httpServer.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
    console.log(`Subscriptions ready at ws://localhost:4000${server.graphqlPath}`);
  });
})();