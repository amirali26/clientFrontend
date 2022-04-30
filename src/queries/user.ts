import { gql } from '@apollo/client';
import { Account } from '../models/account';

export interface IGetUser {
    user: {
        externalId: string,
        name: string,
        phoneNumber: string,
        email: string,
        createdAt: string,
        accounts: Account[],
    }[]
}
export const GET_USER = gql`
    query user {
        user {
            id,
            name,
            phoneNumber,
            imageUrl,
            email,
            accounts {
              id,
              name
            }
        }
    }`;

export default {
  GET_USER,
};
