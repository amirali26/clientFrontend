import { Client } from './client';
import { Enquiry } from './enquiry';
import { Topic } from './topic';

export type Request = {
    id: string,
    client: Client,
    description: string,
    topic: Topic,
    createdDate: string,
    requestNumber: number,
    enquiries: Enquiry[]
}

export type RequestDto = {
    topic: string;
    id: string;
    name: string;
    phoneNumber: string;
    email: string;
    description: string;
    createdDate: string;
}

export enum RequestStatus {
    OPEN = 'OPEN',
    PENDING = 'PENDING',
    RESOLVED = 'RESOLVED',
}
