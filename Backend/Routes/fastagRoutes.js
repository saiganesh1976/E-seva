import express from "express";
import { applyFastag, rechargeFastag } from "../controllers/fastagController.js";

const router = express.Router();

router.post("/apply", applyFastag);
router.post("/recharge", rechargeFastag);

export default router;
