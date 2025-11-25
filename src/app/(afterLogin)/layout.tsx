import Header from "@/components/Header";
import React from "react";

export default function AfterLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col gap-14">
      <Header />
      <div className="overflow-x-scroll">{children}</div>
    </main>
  );
}
