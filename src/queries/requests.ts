import { gql } from '@apollo/client';

const GET_REQUESTS = gql`
query GetRequests {
  requests {
    id,
    description,
    topic {
      name
    }
    createdDate,
    enquiries {
      id
    },
  }
}
`;

export default GET_REQUESTS;
