import { Reservation } from ".prisma/client";
import { RequestHandler } from "express";
import { Status } from ".prisma/client";

interface ReqBodyReservationPost {
  customerCount: number;
  startDate: string;
  endDate: string;
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
  endDate: string;
  startDate: string;
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
  getOne: RequestHandler<{ id: string }, Reservation, null>;
  post: RequestHandler<
    Record<string, never>,
    Reservation,
    ReqBodyReservationPost
  >;
  put: RequestHandler<{ id: string }, null, ReqBodyReservationPut>;
  delete: RequestHandler<Params, null, null>;
}
