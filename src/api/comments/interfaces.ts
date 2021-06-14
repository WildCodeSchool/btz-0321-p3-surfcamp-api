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
  getAll: RequestHandler<{}, Comment[], null>;
  getOne: RequestHandler<{id: string}, Comment, null>;
  post: RequestHandler<{}, Comment, ReqBodyCommentPost>;
  put: RequestHandler<{id: string} | any, null, ReqBodyCommentPut>;
  delete: RequestHandler<{id: string}, null, null>;
}
