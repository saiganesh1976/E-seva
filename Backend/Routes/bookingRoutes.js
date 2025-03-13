import express from "express";
import { bookService } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/book", bookService);

export default router;
