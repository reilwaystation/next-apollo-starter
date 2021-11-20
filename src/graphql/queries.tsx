import { gql } from "@apollo/client";

export const FIND_ALL = gql`
  query {
    characters {
      results {
        name
      }
    }
  }
`;
