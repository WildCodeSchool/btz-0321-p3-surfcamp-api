import { Router } from "express";
import controller from "./controller";
import putSchemaValidator from "../../middleware/putSchemaValidator";
import postSchemaValidator from "../../middleware/postSchemaValidator";
import postFeatureSchemaJOI from "../../JOI/feature/postFeatureSchemaJOI";
import putFeatureSchemaJOI from "../../JOI/feature/putFeatureSchemaJOI";
const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/",postSchemaValidator(postFeatureSchemaJOI), controller.post);
router.put("/:id",putSchemaValidator(putFeatureSchemaJOI),controller.put);
router.delete("/:id", controller.delete);

export default router;
