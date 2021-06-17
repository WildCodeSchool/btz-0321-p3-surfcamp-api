import { City } from ".prisma/client";
import { RequestHandler } from "express";

interface ReqBodyCityPost {
  name: string;
  description: string;
  countryCode: string;
  title: string;
  textSeo: string;
}

interface ReqBodyCityPut {
  name: string;
  description: string;
  countryCode: string;
  title: string;
  textSeo: string;
}

export default interface CityHandlers {
  getAll: RequestHandler<{}, City[], null>;
  getOne: RequestHandler<{ id: string }, City, null>;
  post: RequestHandler<{}, City, ReqBodyCityPost>;
  put: RequestHandler<{ id: string }, null, ReqBodyCityPut>;
  delete: RequestHandler<{ id: string }, null, null>;
}
