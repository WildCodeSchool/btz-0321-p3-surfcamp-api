import { Router } from "express";
import bodyValidator from '../../middleware/bodyValidator'
import controller from "./controller";
import postRoomSchema from "../../JOI/room/postRoomSchemaJOI";
import putRoomSchema from "../../JOI/room/putRoomSchemaJOI";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", bodyValidator(postRoomSchema), controller.post);
router.put("/:id", bodyValidator(putRoomSchema), controller.put);
router.delete("/:id", controller.delete);

export default router;
