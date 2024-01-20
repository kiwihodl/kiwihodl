import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { ReactNode } from 'react';
import { setContext } from '@apollo/client/link/context';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { onError } from "@apollo/client/link/error";

// Your GraphQL server endpoint
const uri = 'http://localhost:4000';

// Create an HTTP link
const httpLink = createHttpLink({ uri });

// Set up an error link
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message }) => console.error(`[GraphQL error]: ${message}`));

  if (networkError) console.error(`[Network error]: ${networkError}`);
});

// Create a link with the HTTP and error links
const link = errorLink.concat(httpLink);

// Set up Apollo Client
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

interface ApolloWrapperProps {
  children: ReactNode;
}

export function ApolloWrapper({ children }: ApolloWrapperProps) {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>{children}</ApolloHooksProvider>
    </ApolloProvider>
  );
}