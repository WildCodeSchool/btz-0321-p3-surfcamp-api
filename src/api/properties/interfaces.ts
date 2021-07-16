import {
  Address,
  Property,
  Feature,
  PropertyType,
  Comment,
  Country,
  City,
} from ".prisma/client";
import { RequestHandler } from "express";

interface ReqBodyPropertyPost {
  name: string;
  description: string;
  type: PropertyType;
  priceByNight: number;
  addressId: string;
  phoneNumber: string;
  address: Record<string, unknown>;
  userId: string;
}

interface ReqBodyPropertyPut {
  name: string;
  description: string;
  type: PropertyType;
  addressId: string;
  userId: string;
  priceByNight: number;
  phoneNumber: string;
}

interface Params {
  id: string;
}

export default interface PropertyHandlers {
  getAll: RequestHandler<null, Property[], null>;
  getOne: RequestHandler<{ id: string }, Property, null>;
  getComments: RequestHandler<{ id: string }, Comment[], null>;
  getAddresses: RequestHandler<{ id: string }, Address, null>;
  getCity: RequestHandler<{ id: string }, City, null>;
  getCountry: RequestHandler<{ id: string }, Country, null>;
  getFeatures: RequestHandler<{ id: string }, Feature[], null>;
  post: RequestHandler<Record<string, never>, Property, ReqBodyPropertyPost>;
  put: RequestHandler<{ id: string }, null, ReqBodyPropertyPut>;
  delete: RequestHandler<Params, null, null>;
  search: RequestHandler<null, Property[], null>;
}
