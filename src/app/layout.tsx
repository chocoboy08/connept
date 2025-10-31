import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: [
    { path: "../../public/fonts/Pretendard-Bold.woff", weight: "700" },
    { path: "../../public/fonts/Pretendard-SemiBold.woff", weight: "600" },
    { path: "../../public/fonts/Pretendard-Medium.woff", weight: "500" },
  ],
  variable: "--font-pretendard",
});
export const metadata: Metadata = {
  title: "CONNEPT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`bg-background-primary ${pretendard.variable} ${pretendard.className} h-screen max-w-7xl m-auto`}
      >
        {children}
      </body>
    </html>
  );
}
