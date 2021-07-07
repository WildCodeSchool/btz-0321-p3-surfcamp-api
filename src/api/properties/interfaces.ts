import {
  Address,
  Property,
  Feature,
  Availability,
  PropertyType,
  Comment,
} from ".prisma/client";
import { RequestHandler } from "express";

interface ReqBodyPropertyPost {
  name: string;
  description: string;
  type: PropertyType;
  priceByNight: number;
  availability: Availability;
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
  availability: Availability;
  phoneNumber: string;
}

interface Params {
  id: string;
}

export default interface PropertyHandlers {
  getAll: RequestHandler<null, Property[], null>;
  getOne: RequestHandler<{ id: string }, Property, null>;
  getComments: RequestHandler<{ id: string }, Comment[], null>;
  getAddresses: RequestHandler<{ id: string }, Address[], null>;
  getFeatures: RequestHandler<{ id: string }, Feature[], null>;
  post: RequestHandler<Record<string, never>, Property, ReqBodyPropertyPost>;
  put: RequestHandler<{ id: string }, null, ReqBodyPropertyPut>;
  delete: RequestHandler<Params, null, null>;
}
