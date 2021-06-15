import { Router } from "express";
import controller from "./controller";

import bodyValidator from "../../middleware/bodyValidator";

import postFeatureSchemaJOI from "../../JOI/feature/postFeatureSchemaJOI";
import putFeatureSchemaJOI from "../../JOI/feature/putFeatureSchemaJOI";
const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", bodyValidator(postFeatureSchemaJOI), controller.post);
router.put("/:id", bodyValidator(putFeatureSchemaJOI), controller.put);
router.delete("/:id", controller.delete);

export default router;
