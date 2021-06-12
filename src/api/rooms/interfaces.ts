import { RequestHandler } from "express";
import { Room } from "@prisma/client";

interface ReqBodyRoomPost {
  name: string;
  priceByNight: number;
  description: string;
  capacity: number;
  propertyId: string;
}

interface ReqBodyRoomPut {
  name: string;
  description: string;
  capacity: number;
  priceByNight: number;
  propertyId: string;
}

interface Params {
  id: string;
}

export default interface RoomHandlers {
  getAll: RequestHandler<null, Room[], null>;
  getOne: RequestHandler<Params, Room, null>;
  post: RequestHandler<null | any, ReqBodyRoomPost>;
  put: RequestHandler<Params | any, null, ReqBodyRoomPut>;
  delete: RequestHandler<Params, null, null>;
}
