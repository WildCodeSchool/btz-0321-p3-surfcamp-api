import { Router } from "express";
import bodyValidator from "../../middleware/bodyValidator";
import putPropertySchema from "../../JOI/property/putPropertySchemaJOI";
import postPropertySchema from "../../JOI/property/postPropertySchemaJOI";
import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.get("/:id/comments", controller.getComments);
router.post("/", bodyValidator(postPropertySchema), controller.post);
router.put("/:id", bodyValidator(putPropertySchema), controller.put);
router.delete("/:id", controller.delete);

export default router;
