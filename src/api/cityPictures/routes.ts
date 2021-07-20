import { Router } from "express";
import controller from "./controller";
import bodyValidator from "../../middleware/bodyValidator";
import postCityPictureSchema from "../../JOI/cityPictures/postCityPictureSchemaJOI";
import putCityPictureSchema from "../../JOI/cityPictures/putCityPictureSchemaJOI";
import checkRole from "../../middleware/checkRole";
import checkToken from "../../middleware/checkToken";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post(
  "/",
  checkToken,
  checkRole,
  bodyValidator(postCityPictureSchema),
  controller.post
);
router.put(
  "/:id",
  checkToken,
  checkRole,
  bodyValidator(putCityPictureSchema),
  controller.put
);
router.delete("/:id", checkToken, checkRole, controller.delete);

export default router;
