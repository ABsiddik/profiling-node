import { Router } from "express";
import { StudentBasicController } from "../controllers/StudentBasicController.js";

const router = Router();

router.post("/", StudentBasicController.create);
router.get("/", StudentBasicController.getAll);
router.get("/name/:name", StudentBasicController.getByName);
router.get("/:id", StudentBasicController.getById);
router.put("/:id", StudentBasicController.update);
router.delete("/:id", StudentBasicController.delete);

export default router;
