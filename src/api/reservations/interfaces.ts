import { Reservation } from ".prisma/client";
import { RequestHandler } from "express";
import { Status } from ".prisma/client";

interface ReqBodyReservationPost {
  property: string;
  customerCount: number;
  startDate: Date;
  endDtate: Date;
  status: Status;
  roomId: string;
  userId: string;
  propertyId: string;
  createdAt: Date;
}

interface ReqBodyReservationPut {
  id: string;
  comment: string;
  createdAt: Date;
  customerCount: number;
  endDtate: Date;
  property: string;
  roomId: string;
  startDate: Date;
  status: Status;
  userId: string;
  propertyId: string;
}

interface Params {
  id: string;
}

export default interface ReservationHandlers {
  getAll: RequestHandler<null, Reservation[], null>;
  getOne: RequestHandler<Params, Reservation, null>;
  post: RequestHandler<null, Reservation, ReqBodyReservationPost>;
  put: RequestHandler<Params, null, ReqBodyReservationPut>;
  delete: RequestHandler<Params, null, null>;
}
