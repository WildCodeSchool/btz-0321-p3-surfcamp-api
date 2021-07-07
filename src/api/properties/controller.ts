import PropertyHandlers from "./interfaces";

import getAll from "./getAll";
import getOne from "./getOne";
import getComments from "./getComments";
import getAddresses from "./getAddresses";
import getCities from "./getCities";
import getCountries from "./getCountries";
import post from "./post";
import put from "./put";
import deleteOne from "./delete";

const controllers: PropertyHandlers = {
  getAll,
  getOne,
  getComments,
  getAddresses,
  getCities,
  getCountries,
  post,
  put,
  delete: deleteOne,
};

export default controllers;
