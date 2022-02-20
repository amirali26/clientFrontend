import { gql } from '@apollo/client';

export const GET_REQUESTS = gql`
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

export const GET_REQUEST = gql`
query GetRequest($id: String!) {
  request(requestId: $id) {
    id,
    description,
    topic {
      name
    }
    createdDate,
    enquiries {
      id,
      message,
      initialConsultationFee,
      estimatedPrice,
      officeAppointment,
      phoneAppointment,
      videoCallAppointment,
      createdAt,
      user {
        name,
        email,
        phoneNumber
      },
      account {
        name,
        website,
        phoneNumber,
        registeredDate,
        areasOfPractice
      }
    },
  }
}
`;

export default {
  GET_REQUESTS,
  GET_REQUEST,
};
