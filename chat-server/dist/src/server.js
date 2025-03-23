import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import messageRouter from "./controllers/chatController.js";
dotenv.config();
const app = express();
// Middleware
const corsOptions = {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
};
app.use(cors(corsOptions));
app.options("http://localhost:3000", cors(corsOptions));
app.use(express.json());
// Routes
app.use("/messages", messageRouter);
// Database Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB Connection Error:", err));
export default app;
