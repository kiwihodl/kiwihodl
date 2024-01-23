// authMutations.ts
import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const SIGNUP_MUTATION = gql`
mutation Login($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    token
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