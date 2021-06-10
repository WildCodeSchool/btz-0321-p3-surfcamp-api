import { Comment } from ".prisma/client";
import { RequestHandler } from "express";

interface ReqBodyCommentsPost {
  comment: string;
  rate: number;
  userId: string;
  reservationId: string;
}

interface ReqBodyCommentsPut {
  id: string;
  comment: string;
  rate: number;
  userId: string;
  reservationId: string;
  roomId: string;
  createdAt: Date;
  propertyId: string;
}

interface Params {
  id: string;
}

export default interface CommentsHandlers {
  getAll: RequestHandler<null, Comment[], null>;
  getOne: RequestHandler<Params, Comment, null>;
  post: RequestHandler<null, Comment, ReqBodyCommentsPost>;
  put: RequestHandler<Params, null, ReqBodyCommentsPut>;
  delete: RequestHandler<Params, null, null>;
}
