import { Router } from "express";
import bodyValidator from '../../middleware/bodyValidator'
import putPropertyPictureSchema from "../../JOI/propertyPictures/putPropertyPictureSchemaJOI";
import postPropertyPictureSchema from "../../JOI/propertyPictures/putPropertyPictureSchemaJOI";
import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post(
  "/",
  bodyValidator(postPropertyPictureSchema),
  controller.post
);
router.put(
  "/:id",
  bodyValidator(putPropertyPictureSchema),
  controller.put
);
router.delete("/:id", controller.delete);

export default router;
