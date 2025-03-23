import { createServer } from "http";
import app from "./server.js";
import { Server } from "socket.io";
import Message from "./models/Message.js";
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});
// WebSocket Logic
io.on("connection", (socket) => {
    console.log("New client connected");
    // Send existing messages to the connected client
    // Weighing between this and using direct post to get all messages (we can then do pagination)
    // Message.find().then((messages) => {
    //   socket.emit('init', messages);
    // });
    socket.on("sendMessage", (data) => {
        console.log("Received message:", data); // Debug log
        const { username, content } = data;
        // Debug Log for Checking Data
        if (!username || !content) {
            console.error("Validation Error: Username and content are required");
            socket.emit("error", { message: "Username and content are required" });
            return;
        }
        try {
            // Save the message to the database
            console.log("Saving message to database...");
            const message = new Message({ username, content });
            message.save().then(() => {
                io.emit("message", data); // Broadcast to all users
            });
        }
        catch (err) {
            console.error("Error saving message to database:", err);
            socket.emit("error", { message: "Failed to save message" });
        }
    });
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});
// Server Initialization
const PORT = Number(process.env.PORT) || 3001;
server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
