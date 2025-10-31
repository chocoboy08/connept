import Flex from "@/components/base/Flex";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function MyStudyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex direction="column" gap={50}>
      <Header />
      {children}
      <Footer />
    </Flex>
  );
}
