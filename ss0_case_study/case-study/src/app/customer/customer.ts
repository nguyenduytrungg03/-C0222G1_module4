import {CustomerType} from "./customer-type";

export interface Customer{
  id?: number;
  codeCustomer?: string;
  nameCustomer?: string;
  birthday?:string;
  gender?: number;
  idCard?: string;
  phoneNumber?: string;
  address?: string;
  type?: CustomerType
}
