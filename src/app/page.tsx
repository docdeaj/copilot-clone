import { MessageInput } from "@/components/message-input";

export default function Home() {
  const suggestions = [
    "Create an image",
    "Recommend a product",
    "Improve writing",
    "Write a first draft",
    "Draft a text",
    "Simplify a topic",
    "Improve communication",
    "Predict the future",
  ];

  return (
    <div className="min-h-screen bg-[#f5f3f2] flex flex-col items-center justify-center px-4 pb-20">
      <div className="w-full max-w-[880px] mx-auto space-y-12">
        {/* Greeting */}
        <h1 className="text-[32px] font-normal text-[#2d2d2d] text-center leading-tight">
          Hi there. What should we dive into today?
        </h1>

        {/* Message Input */}
        <MessageInput />

        {/* Suggestion Chips */}
        <div className="flex flex-wrap gap-2 justify-center mt-8">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="px-5 py-2.5 bg-white rounded-full text-[13px] text-[#878787] hover:text-[#2d2d2d] hover:shadow-md transition-all duration-200 border border-transparent hover:border-[#e5e3e2]"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-6 text-center text-[11px] text-[#878787]">
        Copilot may make mistakes.
      </div>
    </div>
  );
}
