import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ballang",
  description: "joeunjin-ballang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
