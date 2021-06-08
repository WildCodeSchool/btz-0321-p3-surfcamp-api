import { RequestHandler } from "express";
import faker from "faker";

interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  image: string;
  role: string;
  birthDate: Date;
  status: string;
  mobilePhone: string;
}

interface ReqBodyUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  image: string;
  role: string;
  birthDate: Date;
  status: string;
  mobilePhone: string;
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
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      image: faker.image.avatar(),
      role: faker.lorem.word(),
      birthDate: faker.date.past(),
      status: faker.lorem.word(),
      mobilePhone: faker.phone.phoneNumber(),
    };

    res.status(200).json(user);
  },
  post: (req, res) => {
    const {
      firstname,
      lastname,
      email,
      password,
      image,
      role,
      birthDate,
      status,
      mobilePhone,
    } = req.body;

    setTimeout(() => {}, 500);

    const createdUser = {
      id: faker.datatype.uuid(),
      firstname,
      lastname,
      email,
      password,
      image,
      role,
      birthDate,
      status,
      mobilePhone,
    };

    res.status(201).json(createdUser);
  },
  put: (req, res) => {
    const { id } = req.params;
    const {
      firstname,
      lastname,
      email,
      password,
      image,
      role,
      birthDate,
      status,
      mobilePhone,
    } = req.body;

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
