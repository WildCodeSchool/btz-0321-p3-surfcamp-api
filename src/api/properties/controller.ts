import PropertyHandlers from "./interfaces";

import getAll from "./getAll";
import getOne from "./getOne";
import getComments from "./getComments";
import post from "./post";
import put from "./put";
import deleteOne from "./delete";

const controllers: PropertyHandlers = {
  getAll,
  getOne,
  getComments,
  post,
  put,
  delete: deleteOne,
};

export default controllers;
