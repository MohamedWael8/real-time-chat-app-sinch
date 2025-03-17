"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Message_1 = __importDefault(require("../models/Message"));
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
    try {
        const messages = await Message_1.default.find().sort({ timestamp: -1 });
        res.json(messages);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to retrieve messages" });
    }
});
router.post("/", async (req, res) => {
    const { username, content } = req.body;
    if (!username || !content) {
        res.status(400).json({ error: "Username and content are required" });
    }
    try {
        const newMessage = await Message_1.default.create({ username, content });
        res.status(201).json({ message: newMessage });
    }
    catch (err) {
        res.status(500).json({ error: "Failed to save message" });
    }
});
exports.default = router;
