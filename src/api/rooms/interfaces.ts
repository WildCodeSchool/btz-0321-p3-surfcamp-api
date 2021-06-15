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
  getAll: RequestHandler<{}, Room[], null>;
  getOne: RequestHandler<{ id: string }, Room, null>;
  post: RequestHandler<{}, Room, ReqBodyRoomPost>;
  put: RequestHandler<{ id: string }, null, ReqBodyRoomPut>;
  delete: RequestHandler<{ id: string }, null, null>;
}
