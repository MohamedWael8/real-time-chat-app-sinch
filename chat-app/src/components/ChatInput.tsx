import { useState } from "react";
import socket from "../utils/socket";

const ChatInput = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!username || !message) {
      alert("Username and message are required.");
      return;
    }

    try {
      socket.emit("sendMessage", { username, content: message });
      setMessage("");
    } catch (err) {
      alert("Failed to send the message. Please try again.");
      console.error("Send Message Error:", err);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center pt-0">
        <div className="flex items-center justify-center w-full space-x-2">
          <input
            className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
      <div>
        <input
          className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ChatInput;
