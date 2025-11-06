import Flex from "@/components/base/Flex";
import Footer from "@/components/Footer";
import React from "react";

export default function MyStudyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex direction="column" gap={50} className="bg-background-primary py-13 ">
      {children}
      <Footer />
    </Flex>
  );
}
