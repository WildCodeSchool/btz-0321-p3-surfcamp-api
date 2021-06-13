import { Address, Property, Room } from ".prisma/client";
import { RequestHandler } from "express";

interface ReqBodyPropertyPost {
  name: string;
  description: string;
  type: string;
  priceByNight: number;
  status: boolean;
  addressId: string;
  phoneNumber: string;
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
  getOne: RequestHandler<Params, Property, null>;
  post: RequestHandler<null | any, Property, ReqBodyPropertyPost>;
  put: RequestHandler<Params | any, null, ReqBodyPropertyPut>;
  delete: RequestHandler<Params, null, null>;
}
