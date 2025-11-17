import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { Sidebar } from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Microsoft Copilot",
  description: "Your AI companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          <Sidebar />
          <main className="ml-[52px] min-h-screen">
            {children}
          </main>
        </ClientBody>
      </body>
    </html>
  );
}
