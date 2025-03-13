import express from "express";
import { loginUser, registerUser, logoutUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

export default router;
