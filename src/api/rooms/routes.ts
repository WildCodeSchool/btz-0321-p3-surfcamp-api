import { Router } from "express";
import postSchemaValidator from "../../middleware/postSchemaValidator";
import putSchemaValidator from "../../middleware/putSchemaValidator";
import controller from "./controller";
import postRoomSchema from "../../JOI/room/postRoomSchemaJOI";
import putRoomSchema from "../../JOI/room/putRoomSchemaJOI";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", postSchemaValidator(postRoomSchema), controller.post);
router.put("/:id", putSchemaValidator(putRoomSchema), controller.put);
router.delete("/:id", controller.delete);

export default router;
