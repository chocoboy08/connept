import Box from "@/components/base/Box";
import Flex from "@/components/base/Flex";
import Text from "@/components/base/Text";
import HistoryContent from "@/components/HistoryContent";
import StudyRoadMap from "@/components/StudyRoadMap";

export default function HistoryPage() {
  return (
    <Flex justify="space-between">
      <Box paddingX={36} paddingY={20}>
        <Text as={"h1"} size={22} weight={700}>
          현행 개념
        </Text>
        <Flex justify="flex-end" gap={10} className="mb-5">
          <Flex align="center" gap={2}>
            <div className="w-3 h-3 rounded-full bg-correct" />
            <Text size={12} color="#6B7280">
              완료
            </Text>
          </Flex>
          <Flex align="center" gap={2}>
            <div className="w-3 h-3 rounded-full bg-main" />
            <Text size={12} color="#6B7280">
              진행 중
            </Text>
          </Flex>
          <Flex align="center" gap={2}>
            <div className="w-3 h-3 rounded-full bg-[#D1D5DB]" />
            <Text size={12} color="#6B7280">
              예정
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" gap={27}>
          <HistoryContent progress={0} />
          <HistoryContent progress={50} />
          <HistoryContent progress={75} recent="2025.06.14" />
          <HistoryContent progress={100} />
        </Flex>
      </Box>

      <Box paddingX={36} paddingY={20}>
        <Text as={"h1"} size={22} weight={700}>
          연계 개념
        </Text>
        <Flex justify="flex-end" gap={10} className="mb-5">
          <Flex
            align="center"
            gap={4}
            className="bg-[#F3F4F6] px-2 py-1 rounded-full"
          >
            <button>
              <Text size={10} color="var(--color-main)">
                단원
              </Text>
            </button>
            <div className="bg-[#CCCCCC] w-px h-full" />
            <button>
              <Text size={10} color="#AEAEB2">
                개념
              </Text>
            </button>
          </Flex>
        </Flex>
        <Flex direction="column" gap={27}>
          <HistoryContent progress={0} />
          <HistoryContent progress={50} />
          <HistoryContent progress={75} recent="2025.06.14" />
          <HistoryContent progress={100} />
        </Flex>
      </Box>

      <StudyRoadMap />
    </Flex>
  );
}
