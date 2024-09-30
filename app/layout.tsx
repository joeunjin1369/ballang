import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ballang",
  description: "joeunjin-ballang",
};

function HTMLLayout({
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
export default HTMLLayout;
