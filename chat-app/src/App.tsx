import ChatInput from "./components/ChatInput";
import MessageList from "./components/MessageList";

function App() {
  return (
    <div
      style={{
        boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05);",
      }}
      className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[680px]"
    >
      <div className="flex flex-col space-y-1.5 pb-6">
        <h2 className="font-semibold text-lg tracking-tight">
          Sinch's Basic Chat App
        </h2>
      </div>
      <MessageList />
      <ChatInput />
    </div>
  );
}

export default App;
