import { createServer } from "http";
import app from "./server";
import { Server } from "socket.io";

const server = createServer(app);
const io = new Server(server, {
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
