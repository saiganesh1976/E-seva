import express from "express";
import cors from "cors";
import "dotenv/config.js";
import { connectDB } from "./config/db.js";
import authRoutes from "./Routes/authRoute.js";
import bookingRoutes from "./Routes/bookingRoutes.js";
import fastagRoutes from "./Routes/fastagRoutes.js";


const app = express();
const port=4000;

app.use(express.json());
app.use(cors({
  origin: ['https://e-seva-1.onrender.com', 'http://localhost:5173'], // Allow both frontend URLs
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true // Allow cookies & authentication headers
}));

connectDB();

app.use("/auth", authRoutes);
app.use("/bookings", bookingRoutes);
app.use("/fastag", fastagRoutes);

app.get("/", (req, res) => {
    res.send("API Working");
  });

app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`)
});


// mongodb+srv://saiganesh1976:21311a1976_rsg@cluster0.vosja.mongodb.net/?
