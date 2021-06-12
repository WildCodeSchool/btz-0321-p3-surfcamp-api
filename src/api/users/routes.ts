import { Router } from "express";
import postUserSchemaValidator from "../../middleware/postSchemaValidator";
import postUserSchema from "../../JOI/users/postUserSchemaJOI";
import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", postUserSchemaValidator(postUserSchema), controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

export default router;
