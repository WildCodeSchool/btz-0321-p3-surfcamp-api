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

export default interface CommentHandlers {
  getAll: RequestHandler<Record<string, never>, Comment[], null>;
  getOne: RequestHandler<{ id: string }, Comment, null>;
  post: RequestHandler<Record<string, never>, Comment, ReqBodyCommentPost>;
  put: RequestHandler<{ id: string }, null, ReqBodyCommentPut>;
  delete: RequestHandler<{ id: string }, null, null>;
}
