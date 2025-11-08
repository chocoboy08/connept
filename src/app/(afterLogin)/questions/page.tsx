"use client";

import Button from "@/components/base/Button";
import Flex from "@/components/base/Flex";
import Text from "@/components/base/Text";
import { useRouter } from "next/navigation";

const questionData = ["2, 7", "-2, 7", "1, 5", "-1, 5", "3, 12"];

export default function QuestionsPage() {
  const router = useRouter();
  const type = "choice";
  return (
    <Flex direction="column" gap={40}>
      <Flex justify="space-between">
        <Text size={22} weight={700} as={"h2"}>
          로그함수의 최대최소
        </Text>
        <Flex
          justify="center"
          align="center"
          className="bg-[#4F46E510] rounded-4xl w-20 h-10"
        >
          <Text color="var(--color-main)">3 / 10</Text>
        </Flex>
      </Flex>
      <Text size={20} weight={600} as={"h3"}>
        문제 3
      </Text>
      <Text size={18} weight={400}>
        문제 설명
      </Text>
      <Flex direction="column">
        <Flex direction="column">
          <Text>답안 입력</Text>
          <Flex justify="space-between" className="mt-3">
            {type === "choice" ? (
              questionData.map((item, idx) => (
                <Flex align="center" gap={20} key={`${idx}-${item}`}>
                  <Button
                    onClickHandler={() => {}}
                    type="outline"
                    width={45}
                    height={45}
                  >
                    {idx + 1}
                  </Button>
                  <Text>{item}</Text>
                </Flex>
              ))
            ) : (
              <input
                className="border border-[#AEAEB2] rounded-lg px-4  w-100 h-[46px] font-medium text-xl"
                placeholder="답을 입력하세요"
              />
            )}
            <Button
              onClickHandler={() => {}}
              type="outline"
              color="#FF8D28"
              width={94}
              height={46}
            >
              모르겠어요
            </Button>
          </Flex>
        </Flex>
        <Flex justify="flex-end" gap={28} className="mt-20">
          <Button
            onClickHandler={() => {}}
            type="outline"
            width={120}
            height={46}
          >
            이전 문제
          </Button>
          <Button
            onClickHandler={() => {
              router.push("/questions/submit-confirm");
            }}
            width={120}
            height={46}
          >
            다음 문제
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
