import { Router } from "express";
import postUserSchema from "../../JOI/users/postUserSchemaJOI";
import controller from "./controller";
import putUserSchema from "../../JOI/users/putUserSchemaJOI";
import bodyValidator from "../../middleware/bodyValidator";

const router = Router();

router.get(
  "/",
  /*
    #swagger.tags = ["Users"]
  */
  controller.getAll
);
router.get("/:id", controller.getOne);
router.post("/", bodyValidator(postUserSchema), controller.post);
router.put("/:id", bodyValidator(putUserSchema), controller.put);
router.delete("/:id", controller.delete);

export default router;
