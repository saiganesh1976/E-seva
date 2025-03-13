import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
    },
    landmark: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },
    vehicle_number: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },
    fueltype: {
      type: String,
      required: true,
      enum: ["Petrol", "Diesel", "CNG", "Electric"],
    },
    service_required: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { timestamps: true }
);

const bookingsModel = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

export default bookingsModel;
