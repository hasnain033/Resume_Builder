import express from "express";
import { getTemplate } from "../controllers/templates.js";
import collect from "../middleware/collect.js";

const router = express.Router();

router.get("/", collect, getTemplate);

export default router;
