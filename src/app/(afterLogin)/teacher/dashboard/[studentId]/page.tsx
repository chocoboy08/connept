"use client";
import Box from "@/components/base/Box";
import Flex from "@/components/base/Flex";
import Text from "@/components/base/Text";
import UnitRow from "./_components/UnitRow";
import { Unit } from "./types";

// 임시 더미 데이터
const dummyUnits: Unit[] = [
  {
    id: "1",
    name: "적분의 활용",
    problemSets: [
      {
        id: "1-1",
        name: "문제 세트1",
        publishDate: "2025-11-11",
        completionRate: 90,
        totalQuestions: 15,
        studyTime: 3600,
      },
      {
        id: "1-2",
        name: "문제 세트2",
        publishDate: "2025-11-12",
        completionRate: 80,
        totalQuestions: 20,
        studyTime: 3600,
      },
      {
        id: "1-3",
        name: "문제 세트3",
        publishDate: "2025-11-13",
        completionRate: 85,
        totalQuestions: 10,
        studyTime: 3600,
      },
    ],
  },
  {
    id: "2",
    name: "미분법",
    problemSets: [
      {
        id: "2-1",
        name: "문제 세트1",
        publishDate: "2025-11-10",
        completionRate: 100,
        totalQuestions: 25,
        studyTime: 3600,
      },
      {
        id: "2-2",
        name: "문제 세트2",
        publishDate: "2025-11-11",
        completionRate: 75,
        totalQuestions: 18,
        studyTime: 3600,
      },
    ],
  },
];

export default function StudentDetailPage() {
  return (
    <Flex direction="column" className="flex-1" gap={45}>
      <Box paddingX={36} paddingY={20}>
        <Text as={"h2"} size={22} weight={600} color="#212529">
          학생명
        </Text>
        <Text size={14} color="#AEAEB2">
          고등학교 2학년 수2반 | 학생 ID: S2025-0324
        </Text>
        <table className="mx-10 my-4 [&_th]:px-12 [&_th]:py-2.5 [&_td]:px-12 [&_td]:py-2.5">
          <thead>
            <tr className="border-b border-[#D4D4D4]">
              <th>
                <Text size={14} color="#4B5563">
                  최근 접속일
                </Text>
              </th>
              <th>
                <Text size={14} color="#4B5563">
                  최근 학습시간
                </Text>
              </th>
              <th>
                <Text size={14} color="#4B5563">
                  최근 문제 풀이량
                </Text>
              </th>
              <th>
                <Text size={14} color="#4B5563">
                  정답률
                </Text>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Text size={14} center>
                  2025-11-11
                </Text>
              </td>
              <td>
                <Text size={14} center>
                  5시간 30분
                </Text>
              </td>
              <td>
                <Text size={14} center>
                  45문제
                </Text>
              </td>
              <td>
                <Text size={14} center>
                  82%
                </Text>
              </td>
            </tr>
          </tbody>
        </table>
      </Box>
      <Box paddingX={36} paddingY={20}>
        <Text as={"h2"} size={18} weight={600} color="#212529">
          학습 진행 상황
        </Text>
        <table className="[&_th]:py-4 [&_td]:py-3 w-full">
          <thead>
            <tr className="border-b border-[#D4D4D4]">
              <th className="pl-6">
                <Text size={14} color="#4B5563">
                  학습지 이름
                </Text>
              </th>
              <th>
                <Text size={14} color="#4B5563" center>
                  출제일
                </Text>
              </th>
              <th>
                <Text size={14} color="#4B5563" center>
                  완료율
                </Text>
              </th>
              <th>
                <Text size={14} color="#4B5563" center>
                  문항
                </Text>
              </th>
              <th>
                <Text size={14} color="#4B5563" center>
                  학습시간
                </Text>
              </th>
              <th>
                <Text size={14} color="#4B5563" center>
                  결과
                </Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyUnits.map((unit) => (
              <UnitRow key={unit.id} unit={unit} />
            ))}
          </tbody>
        </table>
      </Box>
    </Flex>
  );
}
