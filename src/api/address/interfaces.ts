import { Address, Property } from ".prisma/client";
import { RequestHandler } from "express";

interface ReqBodyAddressPost {
  id :          string;   
  zipcode:      string;
  city:         string;
  street:       string;
  streetNumber: string;
  lat:          number;
  long:         number;
  countryCode:  string;
  phoneNumber:  string;
      
} 


interface ReqBodyAddressPut {
  zipcode:      string;
  city:         string;
  street:       string;
  streetNumber: string;
  lat:          number;
  long:         number;
  countryCode:  string;
  phoneNumber:  string;
}

interface Params {
  id: string;
}

export default interface addressHandlers {
  getAll: RequestHandler<null, Address[], null>;
  getOne: RequestHandler<Params, Address, null>;
  post: RequestHandler<null, Address, ReqBodyAddressPost>;
  put: RequestHandler<Params, null, ReqBodyAddressPut>;
  delete: RequestHandler<Params, null, null>;
}
