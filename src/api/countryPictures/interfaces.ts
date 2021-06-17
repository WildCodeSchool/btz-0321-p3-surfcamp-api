import { CountryPicture } from ".prisma/client";
import { RequestHandler } from "express";

interface ReqBodyCountryPicturePost {
  name: string;
  url: string;
  countryId: string;
}

interface ReqBodyCountryPicturePut {
  name: string;
  url: string;
  countryId: string;
}

export default interface CountryPictureHandlers {
  getAll: RequestHandler<Record<string, never>, CountryPicture[], null>;
  getOne: RequestHandler<{ id: string }, CountryPicture, null>;
  post: RequestHandler<
    Record<string, never>,
    CountryPicture,
    ReqBodyCountryPicturePost
  >;
  put: RequestHandler<{ id: string }, null, ReqBodyCountryPicturePut>;
  delete: RequestHandler<{ id: string }, null, null>;
}
