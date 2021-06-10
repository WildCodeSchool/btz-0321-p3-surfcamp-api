import { Address, Property, Room } from ".prisma/client";
import { RequestHandler } from "express";

interface ReqBodyPropertyPost {
  name: string;
  description: string;
  type: string;
  priceByNight: number;
  status: boolean;
  addressId: string;
}

interface ReqBodyPropertyPut {
  name: string;
  description: string;
  type: string;
  priceByNight: number;
  status: boolean;
}

interface Params {
  id: string;
}

export default interface PropertyHandlers {
  getAll: RequestHandler<null, Property[], null>;
  getOne: RequestHandler<Params, Property, null>;
  post: RequestHandler<null, Property, ReqBodyPropertyPost>;
  put: RequestHandler<Params, null, ReqBodyPropertyPut>;
  delete: RequestHandler<Params, null, null>;
}
