import { Address } from "./address.class";

export class NextUser {
    constructor(public name: string, public email: string, public password: string, public address: Address){}
}