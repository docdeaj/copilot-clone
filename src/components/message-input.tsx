"use client";

import { Plus, Mic, ChevronDown } from "lucide-react";
import { useState } from "react";

export function MessageInput() {
  const [message, setMessage] = useState("");

  return (
    <div className="w-full max-w-[880px] mx-auto px-4">
      <div className="bg-white rounded-[32px] shadow-[0_2px_16px_rgba(0,0,0,0.08)] border border-[#e5e3e2] px-6 py-4 flex items-center gap-3">
        {/* Plus Button */}
        <button className="text-[#5e5e5e] hover:text-[#2d2d2d] transition-colors flex-shrink-0">
          <Plus size={20} strokeWidth={2} />
        </button>

        {/* Input Field */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message Copilot"
          className="flex-1 bg-transparent outline-none text-[15px] placeholder:text-[#878787] text-[#2d2d2d]"
        />

        {/* Model Selector */}
        <button className="flex items-center gap-1 text-[13px] text-[#5e5e5e] hover:text-[#2d2d2d] transition-colors flex-shrink-0">
          <span>Smart (GPT-5)</span>
          <ChevronDown size={14} />
        </button>

        {/* Microphone Button */}
        <button className="text-[#5e5e5e] hover:text-[#2d2d2d] transition-colors flex-shrink-0">
          <Mic size={20} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
