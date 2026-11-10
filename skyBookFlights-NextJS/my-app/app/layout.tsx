import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkyBook Fligts",
  description: "A simple flight booking system",
};

export default function RootLayout({ children }: {children: ReactNode;}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
