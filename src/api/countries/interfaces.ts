import { Country } from ".prisma/client";
import { RequestHandler } from "express";

interface ReqBodyCountryPost {
  name: string;
  description: string;
  countryCode: string;
  title: string;
  textSeo: string;
}

interface ReqBodyCountryPut {
  name: string;
  description: string;
  countryCode: string;
  title: string;
  textSeo: string;
}

export default interface CountryHandlers {
  getAll: RequestHandler<{}, Country[], null>;
  getOne: RequestHandler<{ id: string }, Country, null>;
  post: RequestHandler<{}, Country, ReqBodyCountryPost>;
  put: RequestHandler<{ id: string }, null, ReqBodyCountryPut>;
  delete: RequestHandler<{ id: string }, null, null>;
}
