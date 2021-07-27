import { Router } from "express";
import bodyValidator from "../../middleware/bodyValidator";
import putPropertyPictureSchema from "../../JOI/propertyPictures/putPropertyPictureSchemaJOI";
import postPropertyPictureSchema from "../../JOI/propertyPictures/putPropertyPictureSchemaJOI";
import controller from "./controller";
import checkRole from "../../middleware/checkRole";
import checkToken from "../../middleware/checkToken";
const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post(
  "/",
  checkToken,
  checkRole,
  bodyValidator(postPropertyPictureSchema),
  controller.post
);
router.put(
  "/:id",
  checkToken,
  checkRole,
  bodyValidator(putPropertyPictureSchema),
  controller.put
);
router.delete("/:id", checkToken, checkRole, controller.delete);

export default router;
