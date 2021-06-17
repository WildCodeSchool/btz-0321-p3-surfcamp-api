import { Address, Role } from ".prisma/client";
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
