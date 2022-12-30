import { RequestBase } from './RequestBase';

export class RequestRegister extends RequestBase {
    Email!: string;
    UserCategory!: number;
}