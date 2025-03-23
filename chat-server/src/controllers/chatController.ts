import { Router, Request, Response } from "express";
import Message from "../models/Message.js";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const messages = await Message.find().sort({ timestamp: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve messages" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const { username, content } = req.body;
  if (!username || !content) {
    res.status(400).json({ error: "Username and content are required" });
  }

  try {
    const newMessage = await Message.create({ username, content });
    res.status(201).json({ message: newMessage });
  } catch (err) {
    res.status(500).json({ error: "Failed to save message" });
  }
});

export default router;
