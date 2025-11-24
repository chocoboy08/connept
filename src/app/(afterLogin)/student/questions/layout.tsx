import React from "react";

export default function QuestionsLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className="bg-white py-13 px-20 h-screen -mt-14">
      {modal}
      {children}
    </div>
  );
}
