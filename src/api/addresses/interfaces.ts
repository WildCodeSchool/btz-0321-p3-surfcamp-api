import { Address } from ".prisma/client";
import { RequestHandler } from "express";

interface ReqBodyAddressPost {
  zipcode: string;
  city: string;
  street: string;
  streetNumber: string;
  lat: string;
  long: string;
  countryCode: string;
  userId?: string;
  propertyId?: string;
}

interface ReqBodyAddressPut {
  zipcode: string;
  city: string;
  street: string;
  streetNumber: string;
  lat: string;
  long: string;
  countryCode: string;
  userId?: string;
  propertyId?: string;
}

interface Params {
  id: string;
}

export default interface AddressHandlers {
  getAll: RequestHandler<{}, Address[], null>;
  getOne: RequestHandler<{ id: string }, Address, null>;
  post: RequestHandler<{}, Address, ReqBodyAddressPost>;
  put: RequestHandler<{ id: string }, null, ReqBodyAddressPut>;
  delete: RequestHandler<{ id: string }, null, null>;
}
