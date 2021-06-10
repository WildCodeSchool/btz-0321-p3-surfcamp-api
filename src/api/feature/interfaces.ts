import { Feature } from ".prisma/client";
import { RequestHandler } from "express";

interface ReqBodyFeaturePost {
  label: string;
  type: string;
  createdAt: Date;
  propertyId: string;
}

interface ReqBodyFeaturePut {
  label: string;
  type: string;
  createdAt: Date;
  propertyId: string;
}

interface Params {
  id: string;
}

export default interface FeatureHandlers {
  getAll: RequestHandler<null, Feature[], null>;
  getOne: RequestHandler<Params, Feature, null>;
  post: RequestHandler<null, Feature, ReqBodyFeaturePost>;
  put: RequestHandler<Params, null, ReqBodyFeaturePut>;
  delete: RequestHandler<Params, null, null>;
}
