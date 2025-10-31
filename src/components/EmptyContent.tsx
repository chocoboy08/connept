import BookIcon from "../../public/icons/icon_book.svg";
import ClockIcon from "../../public/icons/icon_clock.svg";
import PencilIcon from "../../public/icons/icon_pencil.svg";
import Box from "./base/Box";
import Flex from "./base/Flex";
import Text from "./base/Text";
import ProgressChart from "./ProgressChart";

interface EmptyContentProps {
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
              <PencilIcon width="24" fill={"#4B5563"} />
              <Text color="#4B5563" size={14}>
                총 {questionNumber}문제
              </Text>
            </Flex>
            <Flex gap={10} align="center">
              <ClockIcon width="24" fill={"#4B5563"} />
              <Text color="#4B5563" size={14}>
                개념학습 {conceptNum}회
              </Text>
            </Flex>
            <Flex gap={10} align="center">
              <BookIcon width="24" fill={"#4B5563"} />
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
