"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, SquarePen, Globe, FileText, Copy, FlaskConical, User } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[52px] bg-[#f5f3f2] border-r border-[#e0dedd] flex flex-col items-center py-3 z-50">
      {/* Copilot Logo */}
      <Link href="/" className="mb-8 mt-1">
        <div className="w-8 h-8 rounded-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700] via-[#FF69B4] to-[#9370DB]" />
          <div className="absolute inset-[3px] rounded-full bg-white flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#00A4EF] to-[#7C4DFF]" />
          </div>
        </div>
      </Link>

      {/* Navigation Icons */}
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className={`transition-colors ${
            pathname === "/" ? "text-[#2d2d2d]" : "text-[#5e5e5e] hover:text-[#2d2d2d]"
          }`}
        >
          <Home size={20} strokeWidth={1.5} />
        </Link>
        <Link
          href="/discover"
          className={`transition-colors ${
            pathname === "/discover" ? "text-[#2d2d2d]" : "text-[#5e5e5e] hover:text-[#2d2d2d]"
          }`}
        >
          <SquarePen size={20} strokeWidth={1.5} />
        </Link>
        <button className="text-[#5e5e5e] hover:text-[#2d2d2d] transition-colors">
          <Globe size={20} strokeWidth={1.5} />
        </button>
        <button className="text-[#5e5e5e] hover:text-[#2d2d2d] transition-colors">
          <FileText size={20} strokeWidth={1.5} />
        </button>
        <button className="text-[#5e5e5e] hover:text-[#2d2d2d] transition-colors">
          <Copy size={20} strokeWidth={1.5} />
        </button>
        <button className="text-[#5e5e5e] hover:text-[#2d2d2d] transition-colors">
          <FlaskConical size={20} strokeWidth={1.5} />
        </button>
      </nav>

      {/* User Icon at bottom */}
      <div className="mt-auto">
        <button className="text-[#5e5e5e] hover:text-[#2d2d2d] transition-colors">
          <User size={20} strokeWidth={1.5} />
        </button>
      </div>
    </aside>
  );
}
