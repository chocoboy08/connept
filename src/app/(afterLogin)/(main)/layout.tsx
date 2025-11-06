import Flex from "@/components/base/Flex";
import Footer from "@/components/Footer";
import React from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex direction="column" gap={100}>
      {children}
      <Footer />
    </Flex>
  );
}
