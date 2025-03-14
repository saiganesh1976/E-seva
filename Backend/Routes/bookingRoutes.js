import express from "express";
import { bookService, getAllBookings } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/book", bookService); // Endpoint for new booking
router.get("/displayBookings", getAllBookings); // Endpoint to get all bookings

export default router;
