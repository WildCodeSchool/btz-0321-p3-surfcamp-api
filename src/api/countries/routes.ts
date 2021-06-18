import { Router } from "express";
import controller from "./controller";
import bodyValidator from "../../middleware/bodyValidator";
import postCountrySchema from "../../JOI/country/postCountrySchemaJOI";
import putCountrySchema from "../../JOI/country/putCountrySchemaJOI";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", bodyValidator(postCountrySchema), controller.post);
router.put("/:id", bodyValidator(putCountrySchema), controller.put);
router.delete("/:id", controller.delete);

export default router;
