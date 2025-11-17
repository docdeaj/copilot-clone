import { MessageInput } from "@/components/message-input";
import { Play } from "lucide-react";
import Image from "next/image";

export default function DiscoverPage() {
  const stories = [
    {
      title: "Trump faces scrutiny over Epstein email revelations",
      image: "https://ext.same-assets.com/445109816/3653830038.jpeg",
    },
    {
      title: "MacKenzie Scott says her college roommate loaned her $1,000 so she wouldn't have to drop out—and is now inspiring her to give away billions",
      image: "https://ext.same-assets.com/445109816/3279465546.jpeg",
    },
    {
      title: "$2K tariff checks would go to working families: Bessent",
      image: "https://ext.same-assets.com/445109816/471116841.jpeg",
    },
    {
      title: "Inside Ford's new world headquarters: Scratch kitchens, rotisserie chickens and design secrets",
      image: "https://ext.same-assets.com/445109816/2347838360.jpeg",
    },
  ];

  const ideas = [
    "Experience bird-watching at U.S. hotspots",
    "Recycle your old tech the right way",
    "Build connections and thrive in a new city",
  ];

  const topics = [
    "Build up your resume",
    "Unlocking secrets of the unseen universe",
    "Impress your friends with a mocktail",
  ];

  return (
    <div className="min-h-screen bg-[#f5f3f2]">
      <div className="max-w-[1200px] mx-auto px-6 py-8 space-y-8">
        {/* Header */}
        <h1 className="text-[32px] font-normal text-[#2d2d2d] text-center mb-12">
          Let's discover what's new
        </h1>

        {/* Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Copilot Daily Card */}
          <div className="col-span-1 md:col-span-1 bg-gradient-to-br from-[#d4e8ed] via-[#e8d8e4] to-[#f5e6d3] rounded-[32px] p-8 flex flex-col justify-between min-h-[300px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-blue-200 to-pink-200 blur-3xl" />
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-center flex-1">
              <div className="relative">
                {/* Audio Visualization */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-[#2d2d2d] rounded-full"
                      style={{
                        height: `${Math.random() * 30 + 20}px`,
                        opacity: 0.7,
                      }}
                    />
                  ))}
                </div>
                {/* Football Image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 rounded-3xl overflow-hidden">
                    <Image
                      src="https://ext.same-assets.com/445109816/787130286.jpeg"
                      alt="Copilot Daily"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 space-y-3">
              <h3 className="text-[20px] font-semibold text-[#2d2d2d]">Copilot Daily</h3>
              <p className="text-[13px] text-[#5e5e5e] leading-relaxed">
                Nov 17 • 3 min  Jets' Kris Boyd shot, Musk trillionaire concerns, KISS guitarist Frehley dies, and more
              </p>
              <button className="w-full bg-[#2d2d2d] text-white rounded-full py-3 px-6 flex items-center justify-center gap-2 hover:bg-[#1a1a1a] transition-colors">
                <Play size={18} fill="white" />
                <span className="text-[14px] font-medium">Play now</span>
              </button>
            </div>
          </div>

          {/* Weather and Article Cards */}
          <div className="col-span-1 space-y-4">
            {/* Weather Card */}
            <div className="bg-gradient-to-br from-[#c5d5f5] via-[#d8d5f0] to-[#e8d5eb] rounded-[32px] p-6 min-h-[140px] flex items-center justify-between">
              <div>
                <div className="text-[11px] text-[#2d2d2d] font-medium mb-2">The Dalles</div>
                <div className="text-[48px] font-light text-[#2d2d2d]">50°</div>
              </div>
              <div className="text-right">
                <div className="text-[15px] text-[#2d2d2d] mb-1">Cloudy</div>
                <div className="text-[12px] text-[#5e5e5e]">H 54° L 45°</div>
              </div>
            </div>

            {/* Sleep Article Card */}
            <div className="bg-white rounded-[32px] overflow-hidden flex items-center gap-4 p-4 min-h-[140px]">
              <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=400&h=400&fit=crop"
                  alt="Sleep friendly foods"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[15px] font-medium text-[#2d2d2d] leading-snug">
                  Want better sleep? try sleep-friendly foods
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Stories to explore */}
        <section className="space-y-4">
          <h2 className="text-[18px] font-semibold text-[#2d2d2d]">Stories to explore</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {stories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[13px] text-[#2d2d2d] leading-snug line-clamp-3">
                    {story.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ideas to explore */}
        <section className="space-y-4">
          <h2 className="text-[18px] font-semibold text-[#2d2d2d]">Ideas to explore</h2>
          <div className="flex flex-wrap gap-2">
            {ideas.map((idea, index) => (
              <button
                key={index}
                className="px-5 py-2.5 bg-white rounded-full text-[13px] text-[#2d2d2d] hover:shadow-md transition-all duration-200 border border-[#e5e3e2]"
              >
                {idea}
              </button>
            ))}
          </div>
        </section>

        {/* Topics I thought you'd enjoy */}
        <section className="space-y-4">
          <h2 className="text-[18px] font-semibold text-[#2d2d2d]">Topics I thought you'd enjoy</h2>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <button
                key={index}
                className="px-5 py-2.5 bg-white rounded-full text-[13px] text-[#2d2d2d] hover:shadow-md transition-all duration-200 border border-[#e5e3e2]"
              >
                {topic}
              </button>
            ))}
          </div>
        </section>

        {/* Footer Text */}
        <div className="text-center text-[11px] text-[#878787] py-6">
          Copilot may make mistakes.
        </div>

        {/* Message Input at bottom */}
        <div className="sticky bottom-6">
          <MessageInput />
        </div>
      </div>
    </div>
  );
}
