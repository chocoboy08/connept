"use client";
import Box from "@/components/base/Box";
import Flex from "@/components/base/Flex";
import Text from "@/components/base/Text";
import { useRouter } from "next/navigation";

export default function SideMenu() {
  const router = useRouter();
  return (
    <Box paddingX={22} paddingY={18} center={false}>
      <button
        className="border border-[#EDECFC] rounded-xl px-6 py-3"
        onClick={() => {
          router.push("/teacher/dashboard");
        }}
      >
        <Flex className="w-50" justify="space-between">
          <Text color="#4B5563">전체 보기</Text>
          <Text color="#4B5563">45명</Text>
        </Flex>
      </button>
    </Box>
  );
}
