import { Feature } from ".prisma/client";
import { RequestHandler } from "express";

interface ReqBodyFeaturePost {
  label: string;
  type: string;
  propertyId: string;
  iconUrl: string;
}

interface ReqBodyFeaturePut {
  label: string;
  type: string;
  propertyId: string;
  iconUrl: string;
}

export default interface FeatureHandlers {
  getAll: RequestHandler<Record<string, never>, Feature[], null>;
  getOne: RequestHandler<{ id: string }, Feature, null>;
  post: RequestHandler<Record<string, never>, Feature, ReqBodyFeaturePost>;
  put: RequestHandler<{ id: string }, null, ReqBodyFeaturePut>;
  delete: RequestHandler<{ id: string }, null, null>;
}
