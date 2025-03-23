import express, { Application } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import messageRouter from "./controllers/chatController";

dotenv.config();

const app: Application = express();

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
async function connectWithRetry() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    console.log("Retrying MongoDB connection in 5 seconds...");
    setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
  }
}

connectWithRetry();

export default app;
