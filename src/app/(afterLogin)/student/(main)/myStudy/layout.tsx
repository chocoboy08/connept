import Flex from "@/components/base/Flex";
import React from "react";

export default function MyStudyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex direction="column" gap={50} className="bg-background-primary ">
      {children}
    </Flex>
  );
}
