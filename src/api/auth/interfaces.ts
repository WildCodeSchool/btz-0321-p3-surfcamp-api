import { RequestHandler } from "express";

interface register {
  email: string;
  password: string;
}

interface Login {
  email: string;
  password: string;
}

interface UserWithoutPassword {
  id: string;
  email: string;
}

export default interface AuthHandlers {
  register: RequestHandler<{ id: string }, Login, null>;
  login: RequestHandler<
    Record<string, never>,
    UserWithoutPassword | any,
    register
  >;
}
