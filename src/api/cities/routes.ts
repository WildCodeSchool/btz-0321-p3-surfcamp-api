import { Router } from "express";
import controller from "./controller";
import bodyValidator from "../../middleware/bodyValidator";
import postCitySchema from "../../JOI/city/postCitySchemaJOI";
import putCitySchema from "../../JOI/city/putCitySchemaJOI";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.get("/:id/citypictures", controller.getCityPictures);
router.post("/", bodyValidator(postCitySchema), controller.post);
router.put("/:id", bodyValidator(putCitySchema), controller.put);
router.delete("/:id", controller.delete);

export default router;
