import { Comment } from ".prisma/client";
import { RequestHandler } from "express";

interface ReqBodyCommentPost {
  comment: string;
  rate: number;
  userId: string;
  reservationId: string;
  propertyId?: string;
  roomId?: string;
}

interface ReqBodyCommentPut {
  comment: string;
  rate: number;
}

interface Params {
  id: string;
}

export default interface CommentHandlers {
  getAll: RequestHandler<null, Comment[], null>;
  getOne: RequestHandler<Params, Comment, null>;
  post: RequestHandler<null, Comment, ReqBodyCommentPost>;
  put: RequestHandler<Params, null, ReqBodyCommentPut>;
  delete: RequestHandler<Params, null, null>;
}
