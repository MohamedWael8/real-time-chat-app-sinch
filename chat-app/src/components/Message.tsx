const Message = ({
  username,
  content,
}: {
  username: string;
  content: string;
}) => {
  return (
    <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
      <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
        <div className="rounded-full bg-blue-100 border p-1" />
      </span>
      <p className="leading-relaxed">
        <span className="block font-bold text-gray-700">{username}</span>
        {content}
      </p>
    </div>
  );
};

export default Message;
