import { Address, Role, Property } from ".prisma/client";
import { RequestHandler } from "express";

interface UserWithoutPassword {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  picture: string | null;
  role: Role;
  birthDate: Date | null;
  phoneNumber: string | null;
  createdAt: Date;
  addressId?: string | null;
}

interface ReqBodyUserPost {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  picture: string | null;
  birthDate: string;
  phoneNumber: string | null;
  address?: Address;
  addressId?: string;
  property?: Property;
  propertyId?: string;
}

interface ReqBodyUserPut {
  firstname: string;
  lastname: string;
  email: string;
  password?: string;
  picture: string | null;
  birthDate: string;
  phoneNumber: string | null;
  role: Role;
  isActive: boolean;
  reservationId: string;
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
