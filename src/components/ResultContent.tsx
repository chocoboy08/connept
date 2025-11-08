import { IconCheck, IconClose } from "@/assets/icons";
import Link from "next/link";
import Flex from "./base/Flex";
import Text from "./base/Text";
import ConceptToggle from "./ConceptToggle";

interface ResultContentProp {
  type: "correct" | "incorrect";
  myAnswer: string;
  rightAnswer: string;
}

export default function ResultContent({
  type,
  myAnswer,
  rightAnswer,
}: ResultContentProp) {
  return (
    <Flex
      className="border border-[#DDDDDD] rounded-2xl px-5 py-4 min-w-125"
      gap={12}
    >
      {type === "correct" ? (
        <Flex
          align="center"
          justify="center"
          className="size-8 bg-correct rounded-full shrink-0"
        >
          <IconCheck width={16} height={16} fill="#fff" />
        </Flex>
      ) : (
        <Flex
          align="center"
          justify="center"
          className="size-8 bg-error rounded-full shrink-0"
        >
          <IconClose width={16} height={16} fill={"#fff"} />
        </Flex>
      )}
      <Flex direction="column" gap={6}>
        <Text as={"h3"} weight={600}>
          문제 1 : 로그함수의 최댓값
        </Text>
        <Text size={14} color="#4B5563">
          함수 f(x) = x^2 + 3x - 2에서의 미분 계수를 구하시오.
        </Text>
        <Flex gap={15}>
          {type === "incorrect" && (
            <Text color="var(--color-error)">내 답안: {myAnswer}</Text>
          )}
          <Text color="var(--color-correct)">정답: {rightAnswer}</Text>
        </Flex>
        <Link href={"/result/explanation"}>
          <Text size={14} color="#4B5563">
            풀이 보기
          </Text>
        </Link>
        <Flex direction="column">
          <Text color="var(--color-main)" size={14}>
            이 문제의 연계 개념
          </Text>
          <ConceptToggle
            title="삼각함수의 덧셈 정리"
            description="삼각함수의 덧셈 정리는 두 각의 합 또는 차에 대한 삼각함수 값을 각각의 삼각함수 값으로 나타내는 공식입니다. 예를 들어, sin(α + β) = sin α cos β + cos α sin β와 같은 형태로 표현됩니다."
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
