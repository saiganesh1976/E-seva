import Booking from "../Models/bookingsModel.js";

// Function to create a new booking
export const bookService = async (req, res) => {
    try {
        const { firstname, lastname, email, phonenumber, vehicle_number, fueltype, service_required, quantity } = req.body;

        // Validate input fields
        if (!firstname || !lastname || !email || !phonenumber || !vehicle_number || !fueltype || !service_required || !quantity) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Check if the vehicle already has a booking
        const existingBooking = await Booking.findOne({ vehicle_number });
        if (existingBooking) {
            return res.status(400).json({ message: "This vehicle already has a booking." });
        }

        // Set ETA (30 minutes from now)
        const eta = new Date();
        eta.setMinutes(eta.getMinutes() + 30);

        const newBooking = new Booking({ ...req.body, eta });
        await newBooking.save();

        res.status(201).json({ message: "Booking successful!", booking: newBooking });
    } catch (error) {
        console.error("Error saving booking:", error);
        res.status(500).json({ message: "Error saving booking data." });
    }
};

// Function to fetch all bookings
export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ message: "Error fetching bookings." });
    }
};
