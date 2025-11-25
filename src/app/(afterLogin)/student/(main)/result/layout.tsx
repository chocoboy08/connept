import React from "react";

export default function ResultLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className="mx-20">
      {children}
      {modal}
    </div>
  );
}
