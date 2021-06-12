import { Reservation } from ".prisma/client";
import { RequestHandler } from "express";
import { Status } from ".prisma/client";

interface ReqBodyReservationPost {
  customerCount: number;
  startDate: Date;
  endDtate: Date;
  status: Status;
  roomId?: string;
  userId: string;
  propertyId?: string;
  createdAt: Date;
}

interface ReqBodyReservationPut {
  id: string;
  comment: string;
  customerCount: number;
  endDtate: Date;
  startDate: Date;
  status: Status;
  userId: string;
  roomId?: string;
  propertyId?: string;
}

interface Params {
  id: string;
}

export default interface ReservationHandlers {
  getAll: RequestHandler<null, Reservation[], null>;
  getOne: RequestHandler<Params, Reservation, null>;
  post: RequestHandler<null | any, Reservation, ReqBodyReservationPost>;
  put: RequestHandler<Params | any, null, ReqBodyReservationPut>;
  delete: RequestHandler<Params, null, null>;
}
