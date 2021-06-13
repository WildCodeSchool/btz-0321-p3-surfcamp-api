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
  getOne: RequestHandler<Params, PropertyPicture, null>;
  post: RequestHandler<null | any, PropertyPicture, ReqBodyPropertyPicturePost>;
  put: RequestHandler<Params | any, null, ReqBodyPropertyPicturePut>;
  delete: RequestHandler<Params, null, null>;
}
