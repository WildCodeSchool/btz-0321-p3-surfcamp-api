import { Property } from ".prisma/client";
import { RequestHandler } from "express";

interface ReqBodyPropertyPost {
  name: string;
  description: string;
  type: string;
  priceByNight: number;
  status: boolean;
  addressId: string;
  phoneNumber: string;
  address: Record<string, unknown>;
}

interface ReqBodyPropertyPut {
  name: string;
  description: string;
  type: string;
  priceByNight: number;
  status: boolean;
  phoneNumber: string;
}

interface Params {
  id: string;
}

export default interface PropertyHandlers {
  getAll: RequestHandler<null, Property[], null>;
  getOne: RequestHandler<{ id: string }, Property, null>;
  post: RequestHandler<Record<string, never>, Property, ReqBodyPropertyPost>;
  put: RequestHandler<{ id: string }, null, ReqBodyPropertyPut>;
  delete: RequestHandler<Params, null, null>;
}
