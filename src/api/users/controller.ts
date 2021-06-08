import { RequestHandler } from "express";
import faker from "faker";

interface User {
  id: string;
  email: string;
}

interface ReqBodyUser {
  email: string;
}

interface Params {
  id: string;
}

interface UserHandlers {
  getAll: RequestHandler<null, User[], null>;
  getOne: RequestHandler<Params, User, null>;
  post: RequestHandler<null, User, ReqBodyUser>;
  put: RequestHandler<Params, null, ReqBodyUser>;
  delete: RequestHandler<Params, null, null>;
}

const controllers: UserHandlers = {
  getAll: (req, res) => {
    res.status(200).json([]);
  },
  getOne: (req, res) => {
    const { id } = req.params;

    const user = {
      id: faker.datatype.uuid(),
      email: faker.internet.email(),
    };

    res.status(200).json(user);
  },
  post: (req, res) => {
    const { email } = req.body;

    setTimeout(() => {}, 500);

    const createdUser = {
      id: faker.datatype.uuid(),
      email,
    };

    res.status(201).json(createdUser);
  },
  put: (req, res) => {
    const { id } = req.params;
    const { email } = req.body;

    setTimeout(() => {}, 500);

    res.sendStatus(204);
  },
  delete: (req, res) => {
    const { id } = req.params;

    setTimeout(() => {}, 500);

    res.sendStatus(204);
  },
};

export default controllers;
