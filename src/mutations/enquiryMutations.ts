import { gql } from '@apollo/client';

const REQUEST_CALLBACK = gql`
  mutation REQUEST_CALLBACK($enquiryId: String!) {
    requestCallback(enquiryId: $enquiryId) {
      id,
    }
  }
`;

export default REQUEST_CALLBACK;
