import { IconArrowDown } from "@/assets/icons";
import Box from "./base/Box";
import Flex from "./base/Flex";
import Text from "./base/Text";

interface HistoryContentProp {
  progress: number;
  recent?: string;
}

export default function HistoryContent({
  progress,
  recent,
}: HistoryContentProp) {
  return (
    <Box border={"1px solid #E5E7EB"} paddingX={16} paddingY={16} width={274}>
      <Flex align="center" justify="space-between">
        <button className="flex justify-center">
          <Text>미분 계수와 도함수</Text>
          <IconArrowDown width={20} height={20} />
        </button>
        <div
          className={`rounded-full px-2.5 py-1.5 ${
            progress === 100
              ? "bg-[#DCFCE7]"
              : progress === 0
              ? "bg-[#F3F4F6]"
              : "bg-[#E6DFFF]"
          }`}
        >
          <Text
            size={10}
            color={
              progress === 100
                ? "#166534"
                : progress === 0
                ? "#4B5563"
                : "var(--color-main)"
            }
          >
            {progress === 100 ? "완료" : progress === 0 ? "예정" : "진행중"}
          </Text>
        </div>
      </Flex>
      <Text size={14} color="#4B5563">
        수학 II
      </Text>
      <Flex justify="space-between" className="mt-1">
        <Text size={14} color="#4B5563">
          진행률
        </Text>
        <Text size={14} color="#4B5563">
          {progress}%
        </Text>
      </Flex>
      <div className="w-full h-2 rounded-full bg-[#E5E7EB] my-1.5">
        <div
          className={`h-2 rounded-full bg-main`}
          style={{ width: `${progress}%` }}
        />
      </div>
      {recent && (
        <Text size={14} color="#4B5563">
          최근 학습: {recent}
        </Text>
      )}
    </Box>
  );
}
