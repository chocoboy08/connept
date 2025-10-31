import Link from "next/link";
import Flex from "./base/Flex";
import Text from "./base/Text";

export default function Footer() {
  return (
    <Flex direction="column" gap={30} className="mb-50 mx-20">
      <div className="h-px bg-[#1F2937]" />
      <Flex justify="space-between">
        <Text size={14} weight={400} color="#9CA3AF">
          © 2025 CONNEPT. All rights reserved. ​
        </Text>
        <Flex gap={24}>
          <Link href={"/terms"}>
            <Text size={14} weight={400} color="#9CA3AF">
              이용약관
            </Text>
          </Link>
          <Link href={"/privacy"}>
            <Text size={14} weight={400} color="#9CA3AF">
              개인정보처리방침
            </Text>
          </Link>
          <Link href={"cookies"}>
            <Text size={14} weight={400} color="#9CA3AF">
              쿠키 정책
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
