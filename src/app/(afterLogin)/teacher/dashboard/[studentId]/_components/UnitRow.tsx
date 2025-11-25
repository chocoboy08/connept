"use client";
import { IconArrowDown } from "@/assets/icons";
import Button from "@/components/base/Button";
import Flex from "@/components/base/Flex";
import Text from "@/components/base/Text";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Unit } from "../types";
import ProgressBar from "./ProgressBar";

interface UnitRowProps {
  unit: Unit;
}

export default function UnitRow({ unit }: UnitRowProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  // 단원 클릭 핸들러
  const handleUnitClick = () => {
    setIsExpanded(!isExpanded);
  };

  // 단원의 총합 계산 함수
  const calculateUnitSummary = () => {
    const totalQuestions = unit.problemSets.reduce(
      (sum, set) => sum + set.totalQuestions,
      0
    );
    const avgCompletionRate =
      unit.problemSets.reduce((sum, set) => sum + set.completionRate, 0) /
      unit.problemSets.length;

    // 학습시간 합산 (h m 형식)
    let totalSec = 0;
    unit.problemSets.forEach((set) => {
      totalSec += set.studyTime;
    });
    const totalHours = Math.floor(totalSec / 3600);
    const remainingMinutes = Math.floor((totalSec % 3600) / 60);
    const totalStudyTime = `${totalHours}h ${remainingMinutes}m`;

    // 출제일은 가장 빠른 날짜
    const earliestDate = unit.problemSets
      .map((set) => set.publishDate)
      .sort()[0];

    return {
      publishDate: earliestDate,
      completionRate: Math.round(avgCompletionRate),
      totalQuestions,
      studyTime: totalStudyTime,
    };
  };

  const summary = calculateUnitSummary();

  return (
    <>
      {/* 단원 행 */}
      <tr
        className="border-b border-[#D4D4D4] hover:bg-[#EDECFC] cursor-pointer"
        onClick={handleUnitClick}
      >
        <td className="flex items-center py-3">
          <div
            className={`transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
          >
            <IconArrowDown width={24} height={24} />
          </div>
          <Text size={14} color="#797979">
            {unit.name}
          </Text>
        </td>
        <td>
          <Text size={14} color="#797979" center>
            {summary.publishDate}
          </Text>
        </td>
        <td>
          <Flex align="center" justify="center">
            <ProgressBar percent={summary.completionRate} />
            <Text size={14} color="#797979" center>
              {summary.completionRate}%
            </Text>
          </Flex>
        </td>
        <td>
          <Text size={14} color="#797979" center>
            {summary.totalQuestions}문제
          </Text>
        </td>
        <td>
          <Text size={14} color="#797979" center>
            {summary.studyTime}
          </Text>
        </td>
        <td className="pr-3">
          <div className="w-12.5" />
        </td>
      </tr>

      {/* 문제세트 행들 */}
      {isExpanded && (
        <>
          {unit.problemSets.map((problemSet) => (
            <tr
              key={problemSet.id}
              className="border-b border-[#D4D4D4] bg-gray-50"
            >
              <td className="pl-6">
                <Text size={14} color="#797979">
                  {problemSet.name}
                </Text>
              </td>
              <td>
                <Text size={14} color="#797979" center>
                  {problemSet.publishDate}
                </Text>
              </td>
              <td>
                <Flex align="center" justify="center">
                  <ProgressBar percent={problemSet.completionRate} />
                  <Text size={14} color="#797979">
                    {problemSet.completionRate}%
                  </Text>
                </Flex>
              </td>
              <td>
                <Text size={14} color="#797979" center>
                  {problemSet.totalQuestions}문제
                </Text>
              </td>
              <td>
                <Text size={14} color="#797979" center>
                  {`${Math.floor(problemSet.studyTime / 3600)}h ${Math.floor(
                    (problemSet.studyTime % 3600) / 60
                  )}m`}
                </Text>
              </td>
              <td className="flex justify-center pr-3">
                <Button
                  type="outline"
                  width={"50px"}
                  height={"20px"}
                  fontSize={8}
                  onClickHandler={() => {
                    router.push("/teacher/dashboard/result");
                  }}
                >
                  학생 결과
                </Button>
              </td>
            </tr>
          ))}
        </>
      )}
    </>
  );
}
