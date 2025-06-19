import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "INORA LABs - Engineering the Edge of Possibility.",
  description: "Researching and developing cutting-edge tools in Artificial Intelligence, Computer Vision, Drone Technology, and Agentic AI Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
