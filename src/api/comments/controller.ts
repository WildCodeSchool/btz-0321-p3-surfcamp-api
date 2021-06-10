import AddressHandlers from "./interfaces";

import getAll from "./getAll";
import getOne from "./getOne";
import post from "./post";
import put from "./put";
import deleteOne from "./delete";

const controllers: AddressHandlers = {
  getAll,
  getOne,
  post,
  put,
  delete: deleteOne,
};

export default controllers;
