import { Router } from "express";
import postSchemaValidator from "../../middleware/postSchemaValidator";
import putSchemaValidator from "../../middleware/putSchemaValidator";
import putPropertyPictureSchema from "../../JOI/propertyPictures/putPropertyPictureSchemaJOI";
import postPropertyPictureSchema from "../../JOI/propertyPictures/putPropertyPictureSchemaJOI";
import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post(
  "/",
  postSchemaValidator(postPropertyPictureSchema),
  controller.post
);
router.put(
  "/:id",
  putSchemaValidator(putPropertyPictureSchema),
  controller.put
);
router.delete("/:id", controller.delete);

export default router;
