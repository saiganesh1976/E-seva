import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://saiganesh1976:21311a1976_rsg@cluster0.vosja.mongodb.net/E_seva"
    )
    .then(() => console.log("DataBase connected"));
};
