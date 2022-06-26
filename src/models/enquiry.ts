import { Account } from './account';
import { Request } from './request';
import { User } from './user';

export type EnquiryInput = {
    message: string,
    requestId: string,
    initialConsultationFee: number,
    estimatedPrice: number,
    officeAppointment: boolean,
    phoneAppointment: boolean,
    videoCallAppointment: boolean,
}

export type Enquiry = {
    id: string,
    message: string,
    initialConsultationFee: number,
    estimatedPrice: number,
    officeAppointment: boolean,
    phoneAppointment: boolean,
    videoCallAppointment: boolean,
    createdAt: string,
    enquiryNumber: number,
    user: User,
    account: Account,
    request: Request,
};

export default EnquiryInput;
