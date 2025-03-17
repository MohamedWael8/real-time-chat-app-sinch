import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import messageRouter from "./controllers/chatController";

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use("/messages", messageRouter);

// Database Connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

export default app;
