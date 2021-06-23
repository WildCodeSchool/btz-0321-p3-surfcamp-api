import { Address, Role, Property } from ".prisma/client";
import { RequestHandler } from "express";

interface UserWithoutPassword {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  picture: string;
  role: Role;
  birthDate: Date;
  phoneNumber: string;
  createdAt: Date;
  addressId?: string | null;
}

interface ReqBodyUserPost {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  picture: string;
  birthDate: string;
  phoneNumber: string;
  address?: Address;
  addressId?: string;
  property?: Property;
  propertyId?: string;
}

interface ReqBodyUserPut {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  picture: string;
  birthDate: string;
  phoneNumber: string;
  role: Role;
  isActive: boolean;
  address?: string;
  addressId?: string;
  propertyId?: string;
  property?: string;
}

export default interface UserHandlers {
  getAll: RequestHandler<Record<string, never>, UserWithoutPassword[], null>;
  getOne: RequestHandler<{ id: string }, UserWithoutPassword, null>;
  post: RequestHandler<
    Record<string, never>,
    UserWithoutPassword | Error,
    ReqBodyUserPost
  >;
  put: RequestHandler<{ id: string }, null, ReqBodyUserPut>;
  delete: RequestHandler<{ id: string }, null, null>;
}
