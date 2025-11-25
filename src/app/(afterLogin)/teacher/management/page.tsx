"use client";

import Box from "@/components/base/Box";
import Button from "@/components/base/Button";
import Flex from "@/components/base/Flex";
import Text from "@/components/base/Text";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Student {
  id: string;
  name: string;
  grade: number;
  studentCode: string;
}

type GradeFilter = "전체" | "초" | "중" | "고";

const dummyStudents: Student[] = [
  {
    id: "1",
    name: "김철수",
    grade: 3,
    studentCode: "STU001",
  },
  {
    id: "2",
    name: "이영희",
    grade: 7,
    studentCode: "STU002",
  },
  {
    id: "3",
    name: "박민수",
    grade: 10,
    studentCode: "STU003",
  },
  {
    id: "4",
    name: "최지훈",
    grade: 5,
    studentCode: "STU004",
  },
];

export default function ManagementPage() {
  const router = useRouter();
  const [students] = useState<Student[]>(dummyStudents);
  const [selectedGrade, setSelectedGrade] = useState<GradeFilter>("전체");
  const [searchQuery, setSearchQuery] = useState("");

  const getGradeRange = (filter: GradeFilter): [number, number] | null => {
    switch (filter) {
      case "초":
        return [1, 6];
      case "중":
        return [7, 9];
      case "고":
        return [10, 12];
      default:
        return null;
    }
  };

  const filteredStudents = students.filter((student) => {
    const gradeRange = getGradeRange(selectedGrade);
    const matchesGrade =
      !gradeRange ||
      (student.grade >= gradeRange[0] && student.grade <= gradeRange[1]);
    const matchesSearch =
      searchQuery === "" ||
      student.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGrade && matchesSearch;
  });

  const handleOpenRegisterModal = () => {
    router.push("/teacher/management/register");
  };

  return (
    <Flex gap={24} justify="space-between" align="flex-start">
      <Box paddingX={22} paddingY={18}>
        <button className="rounded-xl px-6 py-3 w-55 bg-[#EDECFC]">
          <Text center size={18} weight={600} color="var(--color-main)">
            학생 관리
          </Text>
        </button>
      </Box>

      <Flex className="flex-1">
        <Box paddingX={22} paddingY={18} width={"100%"}>
          <Flex direction="column" gap={20}>
            <Flex justify="space-between" align="center">
              <Flex gap={12}>
                {(["전체", "초", "중", "고"] as GradeFilter[]).map((grade) => (
                  <button
                    key={grade}
                    onClick={() => setSelectedGrade(grade)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedGrade === grade
                        ? "bg-main text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Text
                      weight={600}
                      color={selectedGrade === grade ? "white" : "#374151"}
                    >
                      {grade}
                    </Text>
                  </button>
                ))}
              </Flex>

              <Flex gap={12} align="center">
                <input
                  type="text"
                  placeholder="학생 이름 검색"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main"
                />
                <Button
                  type="normal"
                  width={120}
                  height={40}
                  fontSize={14}
                  onClickHandler={handleOpenRegisterModal}
                >
                  학생 등록
                </Button>
              </Flex>
            </Flex>

            <Box withShadow={false}>
              <div>
                <table className="w-full border-collapse table-fixed">
                  <colgroup>
                    <col className="w-1/3" />
                    <col className="w-1/3" />
                    <col className="w-1/3" />
                  </colgroup>
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="px-4 py-3 text-center">
                        <Text weight={600} color="#374151">
                          학생 이름
                        </Text>
                      </th>
                      <th className="px-4 py-3 text-center">
                        <Text weight={600} color="#374151">
                          학년
                        </Text>
                      </th>
                      <th className="px-4 py-3 text-center">
                        <Text weight={600} color="#374151">
                          출결번호
                        </Text>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map((student) => (
                      <tr
                        key={student.id}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 py-4 text-center">
                          <Text weight={600} color="#1F2937">
                            {student.name}
                          </Text>
                        </td>
                        <td className="px-4 py-4 text-center">
                          <Text color="#4B5563">{student.grade}학년</Text>
                        </td>
                        <td className="px-4 py-4 text-center">
                          <Text color="#4B5563">{student.studentCode}</Text>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
