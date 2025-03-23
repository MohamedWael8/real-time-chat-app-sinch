import { io } from "socket.io-client";

const socket = io(process.env.REACT_APP_API_URL || "http://localhost:3001", {
  transports: ["websocket"],
  path: "/socket.io/",
});

export default socket;
