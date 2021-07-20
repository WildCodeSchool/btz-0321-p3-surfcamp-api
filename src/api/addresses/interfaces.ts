import { Address } from ".prisma/client";
import { RequestHandler } from "express";

interface ReqBodyAddressPost {
  zipcode: string;
  cityId: string;
  street: string;
  streetNumber: string;
  lat: string;
  long: string;
  countryId: string;
  userId?: string;
  propertyId?: string;
}

interface ReqBodyAddressPut {
  zipcode: string;
  cityId: string;
  street: string;
  streetNumber: string;
  lat: string;
  long: string;
  countryId: string;
  userId?: string;
  propertyId?: string;
}

export default interface AddressHandlers {
  getAll: RequestHandler<Record<string, never>, Address[], null>;
  getOne: RequestHandler<{ id: string }, Address, null>;
  post: RequestHandler<Record<string, never>, Address, ReqBodyAddressPost>;
  put: RequestHandler<{ id: string }, null, ReqBodyAddressPut>;
  delete: RequestHandler<{ id: string }, null, null>;
}
