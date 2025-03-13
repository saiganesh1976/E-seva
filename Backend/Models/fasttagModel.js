import mongoose from "mongoose";

const fasttagSchema = new mongoose.Schema(
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
      unique: true,
      lowercase: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
      unique: true,
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },
    vehiclenumber: {
      type: String,
      required: true,
      uppercase: true,
      unique: true,
    },
    company: {
      type: String,
      required: true,
    },
    licence: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    amount: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true }
);

const fasttagModel = mongoose.models.Fasttag || mongoose.model("Fasttag", fasttagSchema);

export default fasttagModel;
