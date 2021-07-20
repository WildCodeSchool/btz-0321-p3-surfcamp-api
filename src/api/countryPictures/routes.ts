import { Router } from "express";
import controller from "./controller";
import bodyValidator from "../../middleware/bodyValidator";
import postCountryPictureSchema from "../../JOI/countryPictures/postCountryPictureSchemaJOI";
import putCountryPictureSchema from "../../JOI/countryPictures/putCountryPictureSchemaJOI";
import checkRole from "../../middleware/checkRole";
import checkToken from "../../middleware/checkToken";
const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post(
  "/",
  checkToken,
  checkRole,
  bodyValidator(postCountryPictureSchema),
  controller.post
);
router.put(
  "/:id",
  checkToken,
  checkRole,
  bodyValidator(putCountryPictureSchema),
  controller.put
);
router.delete("/:id", checkToken, checkRole, controller.delete);

export default router;
