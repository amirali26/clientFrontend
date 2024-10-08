import { gql } from '@apollo/client';

const GET_ENQUIRIES = gql`
query GetEnquiries {
    enquiries {
        id,
        message,
        initialConsultationFee,
        estimatedPrice,
        officeAppointment,
        phoneAppointment,
        videoCallAppointment,
        createdAt,
        enquiryNumber,
        status,
        user {
            name,
            email,
            imageUrl
        }
        request {
          id,
          name,
          phoneNumber,
          email,
          requestNumber,
          description,
          topic {
            name
          }
          createdDate,
        }
    }
}
`;

export const GET_ALL_CLIENT_ENQUIRIES = gql`
  query AllClietQueries($token: String!, $phoneNumber: String!, $email: String!) {
    allClientQueries(token: $token, phoneNumber: $phoneNumber, email: $email) {
      id,
    }
  }
`;

export default GET_ENQUIRIES;
