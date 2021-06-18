import { Router } from "express";
import controller from "./controller";
import bodyValidator from "../../middleware/bodyValidator";
import postCityPictureSchema from "../../JOI/cityPictures/postCityPictureSchemaJOI";
import putCityPictureSchema from "../../JOI/cityPictures/putCityPictureSchemaJOI";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", bodyValidator(postCityPictureSchema), controller.post);
router.put("/:id", bodyValidator(putCityPictureSchema), controller.put);
router.delete("/:id", controller.delete);

export default router;
