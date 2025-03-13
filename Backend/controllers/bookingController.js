import Booking from "../Models/bookingsModel.js";

export const bookService = async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).json({ message: "Booking successful!" });
    } catch (error) {
        res.status(500).json({ message: "Error saving booking data." });
    }
};
