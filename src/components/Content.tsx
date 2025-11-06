"use client";
import { useRouter } from "next/navigation";
import { IconBook, IconClock, IconEmptyStar, IconPencil, IconStar } from "@/assets/icons";
import Box from "./base/Box";
import Button from "./base/Button";
import Flex from "./base/Flex";
import Text from "./base/Text";

export interface ContentProps {
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
  const router = useRouter();
  const difficultyStars = (stars: number) => {
    return (
      <Flex gap={1}>
        {Array(stars)
          .fill(0)
          .map((_, idx) => (
            <IconStar key={`star-${idx}`} width="15" />
          ))}
        {Array(5 - stars)
          .fill(0)
          .map((_, idx) => (
            <IconEmptyStar key={`empty-star-${idx}`} width="15" />
          ))}
      </Flex>
    );
  };
  return (
    <Box width={315} paddingX={24} paddingY={21}>
      <Flex justify="space-between" style={{ marginBottom: 20 }}>
        <div className="bg-[#DBEAFE] w-12 h-12 flex justify-center items-center rounded-4xl">
          <IconBook width={30} fill={"#4F46E5"} />
        </div>
        <Text size={12} color="#878787" weight={600}>
          {type}
        </Text>
      </Flex>
      <Flex align="flex-end" gap={20}>
        <Flex direction="column" gap={10}>
          <Text as={"h3"} size={18} weight={600}>
            {title}
          </Text>
          <Flex gap={12} align="center">
            <IconPencil width="24" fill={"#4B5563"} />
            <Text color="#4B5563" size={14}>
              {number}문제
            </Text>
          </Flex>
          <Flex gap={12} align="center">
            <IconClock width="24" fill={"#4B5563"} />
            <Text color="#4B5563" size={14}>
              예상 소요시간: {time}
            </Text>
          </Flex>
          <Flex gap={5}>
            <Text size={14}>난이도:</Text>
            {difficultyStars(difficulty)}
          </Flex>
        </Flex>
        <Button
          width={95}
          height={41}
          onClickHandler={() => {
            router.push("/questions");
          }}
        >
          학습하기
        </Button>
      </Flex>
    </Box>
  );
}
