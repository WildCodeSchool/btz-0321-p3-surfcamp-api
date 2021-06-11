import { Address, PropertyPicture, Room } from ".prisma/client";
import { RequestHandler } from "express";

interface ReqBodyPropertyPicturePost {
  name: string;
  description: string;
  url: string,
  propertyId: string,
}

interface ReqBodyPropertyPicturePut {
  name: string;
  description: string;
  url: string,
  propertyId: string,
}

interface Params {
  id: string;
}

export default interface PropertyPictureHandlers {
  getAll: RequestHandler<null, PropertyPicture[], null>;
  getOne: RequestHandler<Params, PropertyPicture, null>;
  post: RequestHandler<null, PropertyPicture, ReqBodyPropertyPicturePost>;
  put: RequestHandler<Params, null, ReqBodyPropertyPicturePut>;
  delete: RequestHandler<Params, null, null>;
}
