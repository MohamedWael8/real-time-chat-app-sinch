import { useEffect, useState } from "react";
import socket from "../utils/socket";
import Message from "./Message";
import axiosInstance from "../utils/axios";

interface MessageType {
  username: string;
  content: string;
}

const MessageList = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    axiosInstance
      .get("/messages")
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => console.error("Error fetching messages:", err));

    socket.on("message", (newMessage: MessageType) => {
      setMessages((prev) => [...prev, newMessage]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  return (
    <div className="pr-4 h-[474px] min-width-100 table">
      {messages.map((msg, idx) => (
        <Message key={idx} username={msg.username} content={msg.content} />
      ))}
    </div>
  );
};

export default MessageList;
