import BookIcon from "../../public/icons/icon_book.svg";
import ClockIcon from "../../public/icons/icon_clock.svg";
import EmptyStarIcon from "../../public/icons/icon_empty_star.svg";
import PencilIcon from "../../public/icons/icon_pencil.svg";
import StarIcon from "../../public/icons/icon_star.svg";
import Box from "./base/Box";
import Button from "./base/Button";
import Flex from "./base/Flex";
import Text from "./base/Text";

interface ContentProps {
  title: string;
  number: number;
  time: string;
  difficulty: number;
  type: "학원 진도 기반" | "공백 개념 학습" | "지난주 복습";
}

export default function Content({
  title,
  number,
  time,
  difficulty,
  type,
}: ContentProps) {
  const difficultyStars = () => {
    return (
      <Flex gap={1}>
        {Array(difficulty)
          .fill(0)
          .map((_, idx) => (
            <StarIcon key={`star-${idx}`} width="15" />
          ))}
        {Array(5 - difficulty)
          .fill(0)
          .map((_, idx) => (
            <EmptyStarIcon key={`empty-star-${idx}`} width="15" />
          ))}
      </Flex>
    );
  };
  return (
    <Box width={315} paddingX={24} paddingY={21}>
      <Flex justify="space-between" style={{ marginBottom: 20 }}>
        <div className="bg-[#DBEAFE] w-12 h-12 flex justify-center items-center rounded-4xl">
          <BookIcon width={30} fill={"#4F46E5"} />
        </div>
        <Text size={12} color="#878787" weight={600}>
          {type}
        </Text>
      </Flex>
      <Flex align="flex-end" gap={20}>
        <Flex direction="column" gap={14}>
          <Text as={"h3"} size={18} weight={600}>
            {title}
          </Text>
          <Flex gap={12} align="center">
            <PencilIcon width="24" fill={"#4B5563"} />
            <Text color="#4B5563" size={14}>
              {number}문제
            </Text>
          </Flex>
          <Flex gap={12} align="center">
            <ClockIcon width="24" fill={"#4B5563"} />
            <Text color="#4B5563" size={14}>
              예상 소요시간: {time}
            </Text>
          </Flex>
          <Flex gap={5}>
            <Text size={14}>난이도:</Text>
            {difficultyStars()}
          </Flex>
        </Flex>
        <Button width={95} height={41}>
          <Text size={14} color="#fff">
            학습하기
          </Text>
        </Button>
      </Flex>
    </Box>
  );
}
