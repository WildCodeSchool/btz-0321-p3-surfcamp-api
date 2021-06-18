import { Router } from "express";
import controller from "./controller";
import bodyValidator from "../../middleware/bodyValidator";
import postCountryPictureSchema from "../../JOI/countryPictures/postCountryPictureSchemaJOI";
import putCountryPictureSchema from "../../JOI/countryPictures/putCountryPictureSchemaJOI";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", bodyValidator(postCountryPictureSchema), controller.post);
router.put("/:id", bodyValidator(putCountryPictureSchema), controller.put);
router.delete("/:id", controller.delete);

export default router;
