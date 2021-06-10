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
  picture: string;
  birthDate: string;
  phoneNumber: string;
  role: Role;
  isActive: boolean;
}

interface Params {
  id: string;
}

export default interface UserHandlers {
  getAll: RequestHandler<null, UserWithoutPassword[], null>;
  getOne: RequestHandler<Params, UserWithoutPassword, null>;
  post: RequestHandler<null, UserWithoutPassword, ReqBodyUserPost>;
  put: RequestHandler<Params, null, ReqBodyUserPut>;
  delete: RequestHandler<Params, null, null>;
}
