import { Account } from './account';

export type User = {
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    accounts: Account[],
}
