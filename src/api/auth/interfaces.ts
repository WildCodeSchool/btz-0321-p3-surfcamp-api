import { RequestHandler } from "express";

interface register {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
}

interface Login {
  email: string;
  password: string;
}

interface UserWithoutPassword {
  id: string;
  firstname?: string | null;
  lastname?: string | null;
  email: string;
  picture: string | null;
  birthDate: Date | null;
  phoneNumber: string | null;
  createdAt: Date;
  addressId?: string | null;
}

export default interface AuthHandlers {
  register: RequestHandler<register, UserWithoutPassword, register>;

  login: RequestHandler<
    Record<string, never>,
    Login | { message: string },
    register
  >;
}
