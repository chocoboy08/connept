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
          <Text size={14} weight={400} color="#9CA3AF">
            이용약관
          </Text>
          <Text size={14} weight={400} color="#9CA3AF">
            개인정보처리방침
          </Text>
          <Text size={14} weight={400} color="#9CA3AF">
            쿠키 정책
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
