import { Router } from "express";
import postUserSchema from "../../JOI/users/postUserSchemaJOI";
import controller from "./controller";
import putUserSchema from "../../JOI/users/putUserSchemaJOI";
import bodyValidator from "../../middleware/bodyValidator";
import checkToken from "../../middleware/checkToken";

const router = Router();

router.get("/", checkToken, controller.getAll);
router.get("/:id", checkToken, controller.getOne);
router.post("/", checkToken, bodyValidator(postUserSchema), controller.post);
router.put("/:id", checkToken, bodyValidator(putUserSchema), controller.put);
router.delete("/:id", checkToken, controller.delete);

export default router;
