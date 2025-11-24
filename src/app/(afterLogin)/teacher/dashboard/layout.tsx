import Flex from "@/components/base/Flex";
import React from "react";
import SideMenu from "./_components/SideMenu";

export default function TeacherDashboardLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <Flex className="mx-20" gap={50} align="flex-start">
      {modal}
      <SideMenu />
      {children}
    </Flex>
  );
}
