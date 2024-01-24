import { gql } from '@apollo/client';

// Login Mutation
export const LOGIN_MUTATION = gql`
mutation Login($email: String!, $password: String!) {
  loginUser(input: {email: $email, password: $password}) {
    token
  }
}
`;

// Signup Mutation
export const SIGNUP_MUTATION = gql`
mutation Signup($email: String!, $password: String!) {
  signup(input: {email: $email, password: $password}) {
    token
  }
}
`;

// Create Content Mutation
export const CREATE_CONTENT_MUTATION = gql`
mutation CreateContent($input: ContentInput!) {
  createContent(input: $input) {
    user {
      ID
      User
      Category
      Full_Name
      Email
      Verified
      _21Client
      ThumbNail
      ThumbNailAltDescription
      Content {
        ContentTitle
        ContentParagraph
        Watch {
          Fiat {
            Spotify
            ApplePodcasts
            Sphinx
            Fountain
            Breez
          }
          Bitcoin {
            Spotify
            ApplePodcasts
            Sphinx
            Fountain
            Breez
          }
        }
        Listen {
          Fiat {
            Spotify
            ApplePodcasts
            Sphinx
            Fountain
            Breez
          }
          Bitcoin {
            Spotify
            ApplePodcasts
            Sphinx
            Fountain
            Breez
          }
        }
        Read {
          Fiat {
            Spotify
            ApplePodcasts
            Sphinx
            Fountain
            Breez
          }
          Bitcoin {
            Spotify
            ApplePodcasts
            Sphinx
            Fountain
            Breez
          }
        }
      }
      Donate
      Contact
    }
  }
}
`;

// Edit Content Mutation
export const EDIT_CONTENT_MUTATION = gql`
mutation EditContent($id: ID!, $input: ContentInput!) {
  editContent(id: $id, input: $input) {
    user {
      ID
      User
      Category
      Full_Name
      Email
      Verified
      _21Client
      ThumbNail
      ThumbNailAltDescription
      Content {
        ContentTitle
        ContentParagraph
        Watch {
          Fiat {
            Spotify
            ApplePodcasts
            Sphinx
            Fountain
            Breez
          }
          Bitcoin {
            Spotify
            ApplePodcasts
            Sphinx
            Fountain
            Breez
          }
        }
        Listen {
          Fiat {
            Spotify
            ApplePodcasts
            Sphinx
            Fountain
            Breez
          }
          Bitcoin {
            Spotify
            ApplePodcasts
            Sphinx
            Fountain
            Breez
          }
        }
        Read {
          Fiat {
            Spotify
            ApplePodcasts
            Sphinx
            Fountain
            Breez
          }
          Bitcoin {
            Spotify
            ApplePodcasts
            Sphinx
            Fountain
            Breez
          }
        }
      }
      Donate
      Contact
    }
  }
}
`;