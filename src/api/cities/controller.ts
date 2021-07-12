import CityHandlers from "./interfaces";

import getAll from "./getAll";
import getOne from "./getOne";
import getCityPictures from "./getCityPictures";
import post from "./post";
import put from "./put";
import deleteOne from "./delete";

const controllers: CityHandlers = {
  getAll,
  getOne,
  getCityPictures,
  post,
  put,
  delete: deleteOne,
};

export default controllers;
