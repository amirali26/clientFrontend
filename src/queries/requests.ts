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
    requestNumber,
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
      enquiryNumber,
      createdAt,
      user {
        name,
        email,
        phoneNumber,
        imageUrl
      },
      account {
        name,
        website,
        email,
        phoneNumber,
        registeredDate,
        areasOfPractice,
        imageUrl
      }
    },
  }
}
`;

export default {
  GET_REQUESTS,
  GET_REQUEST,
};
