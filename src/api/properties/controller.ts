import { RequestHandler } from "express";
import faker from "faker";

interface Property {
  id: string;
  name: string;
  description: string;
}

interface ReqBodyProperty {
  name: string;
  description: string;
}

interface Params {
  id: string;
}

interface PropertyHandlers {
  getAll: RequestHandler<null, Property[], null>;
  getOne: RequestHandler<Params, Property, null>;
  post: RequestHandler<null, Property, ReqBodyProperty>;
  put: RequestHandler<Params, null, ReqBodyProperty>;
  delete: RequestHandler<Params, null, null>;
}

const controllers: PropertyHandlers = {
  getAll: (req, res) => {
    res.status(200).json([]);
  },
  getOne: (req, res) => {
    const { id } = req.params;

    const property = {
      id: faker.datatype.uuid(),
      name: faker.company.companyName(),
      description: faker.company.catchPhrase(),
    };

    res.status(200).json(property);
  },
  post: (req, res) => {
    const { name, description } = req.body;

    setTimeout(() => {}, 500);

    const createdProperty = {
      id: faker.datatype.uuid(),
      name,
      description,
    };

    res.status(201).json(createdProperty);
  },
  put: (req, res) => {
    const { id } = req.params;
    const { description, name } = req.body;

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
