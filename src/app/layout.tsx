import type { Metadata } from "next";
import { Akshar, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MusicPlayerProvider } from "@/context/musicContext";

const aksharSans = Akshar({
  variable: "--font-akshar",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Music Player",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${aksharSans.variable} ${geistMono.variable} antialiased`}
      >
        <MusicPlayerProvider>{children}</MusicPlayerProvider>
      </body>
    </html>
  );
}
