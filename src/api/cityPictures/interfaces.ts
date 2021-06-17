import { CityPicture } from ".prisma/client";
import { RequestHandler } from "express";

interface ReqBodyCityPicturePost {
  name: string;
  url: string;
  cityId: string;
}

interface ReqBodyCityPicturePut {
  name: string;
  url: string;
  cityId: string;
}

export default interface CityPictureHandlers {
  getAll: RequestHandler<Record<string, never>, CityPicture[], null>;
  getOne: RequestHandler<{ id: string }, CityPicture, null>;
  post: RequestHandler<
    Record<string, never>,
    CityPicture,
    ReqBodyCityPicturePost
  >;
  put: RequestHandler<{ id: string }, null, ReqBodyCityPicturePut>;
  delete: RequestHandler<{ id: string }, null, null>;
}
