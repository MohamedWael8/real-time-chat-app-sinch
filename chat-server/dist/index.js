"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const server_1 = __importDefault(require("./server"));
const socket_io_1 = require("socket.io");
const server = (0, http_1.createServer)(server_1.default);
const io = new socket_io_1.Server(server, {
    cors: { origin: "*" },
});
// WebSocket Logic
io.on("connection", (socket) => {
    console.log("New client connected");
    socket.on("sendMessage", (data) => {
        io.emit("message", data); // Broadcast to all users
    });
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});
// Server Initialization
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
