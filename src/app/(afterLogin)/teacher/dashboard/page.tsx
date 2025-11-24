"use client";

import Box from "@/components/base/Box";
import Flex from "@/components/base/Flex";
import Text from "@/components/base/Text";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

interface Student {
  id: string;
  name: string;
  grade: number;
  lastAccessDate: string;
  recentProblemsCount: number;
  studyTime: number;
  weakPoints: number;
}

const dummyStudents: Student[] = [
  {
    id: "1",
    name: "김철수",
    grade: 3,
    lastAccessDate: "2025-01-15",
    recentProblemsCount: 15,
    studyTime: 120,
    weakPoints: 3,
  },
  {
    id: "2",
    name: "이영희",
    grade: 3,
    lastAccessDate: "2025-01-14",
    recentProblemsCount: 12,
    studyTime: 95,
    weakPoints: 2,
  },
  {
    id: "3",
    name: "박민수",
    grade: 2,
    lastAccessDate: "2025-01-13",
    recentProblemsCount: 8,
    studyTime: 60,
    weakPoints: 4,
  },
];

type SortOrder = "desc" | "asc";

export default function TeacherDashboardPage() {
  const router = useRouter();
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  const sortedStudents = useMemo(() => {
    return [...dummyStudents].sort((a, b) => {
      if (sortOrder === "desc") {
        return b.studyTime - a.studyTime;
      } else {
        return a.studyTime - b.studyTime;
      }
    });
  }, [sortOrder]);

  const formatStudyTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const handleStudentClick = (studentId: string) => {
    router.push(`/teacher/dashboard/${studentId}`);
  };

  return (
    <Box paddingX={22} paddingY={18}>
      <Flex direction="column" gap={16}>
        <Flex justify="space-between" align="center">
          <Text size={20} weight={700}>
            반별 학생 관리
          </Text>
          <Flex gap={12} className="bg-[#F3F4F6] px-2 py-1 rounded-md">
            <button
              onClick={() => setSortOrder("desc")}
              className={`px-4 py-2 rounded-lg  transition-colors ${
                sortOrder === "desc"
                  ? "bg-white shadow-[0_2px_2px_0_rgba(0,0,0,0.06)]"
                  : "bg-transparent"
              }`}
            >
              <Text color={sortOrder === "desc" ? "#444444" : "#6B7280"}>
                학습시간 많은 순
              </Text>
            </button>
            <button
              onClick={() => setSortOrder("asc")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                sortOrder === "asc"
                  ? "bg-white shadow-[0_2px_2px_0_rgba(0,0,0,0.06)]"
                  : "bg-transparent"
              }`}
            >
              <Text color={sortOrder === "asc" ? "#444444" : "#6B7280"}>
                학습시간 적은 순
              </Text>
            </button>
          </Flex>
        </Flex>

        <Box withShadow={false} paddingX={0} paddingY={0}>
          <table className="w-full border-collapse [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-4">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left">
                  <Text weight={600} color="#374151">
                    학생명
                  </Text>
                </th>
                <th className="text-center">
                  <Text weight={600} color="#374151">
                    학년
                  </Text>
                </th>
                <th className="text-center">
                  <Text weight={600} color="#374151">
                    최근 접속일
                  </Text>
                </th>
                <th className="text-center">
                  <Text weight={600} color="#374151">
                    최근 푼 문제 수
                  </Text>
                </th>
                <th className="text-center">
                  <Text weight={600} color="#374151">
                    학습시간
                  </Text>
                </th>
                <th className="text-center">
                  <Text weight={600} color="#374151">
                    진단된 취약점
                  </Text>
                </th>
                <th className="text-center">
                  <Text weight={600} color="#374151">
                    관리
                  </Text>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedStudents.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => handleStudentClick(student.id)}
                >
                  <td>
                    <Text weight={600} color="#1F2937">
                      {student.name}
                    </Text>
                  </td>
                  <td>
                    <Text color="#4B5563" center>
                      {student.grade}학년
                    </Text>
                  </td>
                  <td>
                    <Text color="#4B5563" center>
                      {student.lastAccessDate}
                    </Text>
                  </td>
                  <td>
                    <Text color="#4B5563" center>
                      {student.recentProblemsCount}문제
                    </Text>
                  </td>
                  <td>
                    <Text color="#4B5563" center>
                      {formatStudyTime(student.studyTime)}
                    </Text>
                  </td>
                  <td>
                    <Text color="#4B5563" center>
                      {student.weakPoints}개
                    </Text>
                  </td>
                  <td>
                    <div></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Flex>
    </Box>
  );
}
