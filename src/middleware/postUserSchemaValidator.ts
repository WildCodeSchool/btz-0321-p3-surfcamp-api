import postUserSchema from "../JOI/users/postUserSchemaJOI";

export default function postUserSchemaValidator(req, res, next) {
  const body = req;
  const result = postUserSchema.validate(req.body);
  const { value, error } = result;
  const valid = error == null;

  if (!valid) {
    res.status(422).send({
      message: "Filds are missings or unavailable",
      data: error,
    });
    throw new Error("Filds are missings or unavailable");
  }
  next();
}
