import { PropertyPicture } from ".prisma/client";
import { RequestHandler } from "express";

interface ReqBodyPropertyPicturePost {
  name: string;
  description: string;
  url: string;
  propertyId: string;
}

interface ReqBodyPropertyPicturePut {
  name: string;
  description: string;
  url: string;
  propertyId: string;
}

interface Params {
  id: string;
}

export default interface PropertyPictureHandlers {
  getAll: RequestHandler<null, PropertyPicture[], null>;
  getOne: RequestHandler<{ id: string }, PropertyPicture, null>;
  post: RequestHandler<
    Record<string, never>,
    PropertyPicture,
    ReqBodyPropertyPicturePost
  >;
  put: RequestHandler<{ id: string }, null, ReqBodyPropertyPicturePut>;
  delete: RequestHandler<Params, null, null>;
}
