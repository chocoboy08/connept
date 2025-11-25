import React from "react";

export default function ManagementLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className="mx-20">
      {modal}
      {children}
    </div>
  );
}
