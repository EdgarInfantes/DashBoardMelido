import { Router } from "express";
import {
  createServices,
  deleteService,
  editService,
  renderServices,
  updateService
} from "../controllers/serviceController.js";
const router = Router();

router.get("/", renderServices);
router.post("/add", createServices);
router.get("/update/:id", editService);
router.post("/update/:id", updateService);
router.get("/delete/:id", deleteService);

export default router;