import createUser from "./createUserSeed";
import createProperty from "./createPropertySeed";

const seed: any = async () => {
  createUser();
  createUser();
  createUser();
  createUser();
  createUser();
  createUser();
  createUser();
  createUser();
  createUser();
  createUser();

  createProperty();
  createProperty();
  createProperty();
  createProperty();
  createProperty();
  createProperty();
  createProperty();
  createProperty();
  createProperty();
  createProperty();

  return "ok seed";
};

export default seed;
