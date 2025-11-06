import { IconBook, IconClock, IconPencil } from "@/assets/icons";
import Box from "./base/Box";
import Flex from "./base/Flex";
import Text from "./base/Text";
import ProgressChart from "./ProgressChart";

export interface EmptyContentProps {
  title: string;
  questionNumber: number;
  conceptNum: number;
  correct: number;
  progress: number;
}

export default function EmptyContent({
  title,
  questionNumber,
  conceptNum,
  correct,
  progress,
}: EmptyContentProps) {
  return (
    <Box paddingX={36} paddingY={34} width={345}>
      <Flex justify="space-between" align="center">
        <Flex direction="column" gap={14}>
          <Text as={"h3"} size={18} weight={600}>
            {title}
          </Text>
          <Flex direction="column">
            <Flex gap={10} align="center">
              <IconPencil width="24" fill={"#4B5563"} />
              <Text color="#4B5563" size={14}>
                총 {questionNumber}문제
              </Text>
            </Flex>
            <Flex gap={10} align="center">
              <IconClock width="24" fill={"#4B5563"} />
              <Text color="#4B5563" size={14}>
                개념학습 {conceptNum}회
              </Text>
            </Flex>
            <Flex gap={10} align="center">
              <IconBook width="24" fill={"#4B5563"} />
              <Text color="#4B5563" size={14}>
                정답률 {correct}%
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <ProgressChart percent={progress} />
      </Flex>
    </Box>
  );
}
