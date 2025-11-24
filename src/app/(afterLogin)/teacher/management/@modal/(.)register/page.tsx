"use client";

import { IconClose } from "@/assets/icons";
import Button from "@/components/base/Button";
import Flex from "@/components/base/Flex";
import Modal from "@/components/base/Modal";
import Text from "@/components/base/Text";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterStudentModal() {
  const router = useRouter();
  const [newStudent, setNewStudent] = useState({
    name: "",
    grade: "",
    studentCode: "",
  });

  const handleClose = () => {
    router.back();
  };

  const handleRegisterStudent = () => {
    if (!newStudent.name || !newStudent.grade || !newStudent.studentCode) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    console.log("학생 등록:", newStudent);
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <IconClose
        width={24}
        height={24}
        fill={"#868686"}
        className="justify-self-end cursor-pointer"
        onClick={handleClose}
      />
      <Flex direction="column" justify="center" gap={40} className="px-11">
        <div>
          <Text as={"h2"} size={24} weight={700} color="#1F2937" center>
            학생 등록
          </Text>
        </div>

        <Flex direction="column" gap={16}>
          <Flex
            justify="space-between"
            align="center"
            className="w-full"
            gap={24}
          >
            <Text weight={600} color="#374151">
              이름
            </Text>
            <input
              type="text"
              value={newStudent.name}
              onChange={(e) =>
                setNewStudent({ ...newStudent, name: e.target.value })
              }
              placeholder="학생 이름"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main"
            />
          </Flex>

          <Flex
            justify="space-between"
            align="center"
            className="w-full"
            gap={24}
          >
            <Text weight={600} color="#374151">
              학년
            </Text>
            <input
              type="text"
              value={newStudent.grade}
              onChange={(e) =>
                setNewStudent({ ...newStudent, grade: e.target.value })
              }
              placeholder="학년"
              min="1"
              max="12"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main"
            />
          </Flex>

          <Flex
            justify="space-between"
            align="center"
            className="w-full"
            gap={24}
          >
            <Text weight={600} color="#374151">
              코드
            </Text>
            <input
              type="text"
              value={newStudent.studentCode}
              onChange={(e) =>
                setNewStudent({
                  ...newStudent,
                  studentCode: e.target.value,
                })
              }
              placeholder="학생코드"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main"
            />
          </Flex>
        </Flex>

        <Button
          type="normal"
          height={50}
          onClickHandler={handleRegisterStudent}
        >
          등록하기
        </Button>
      </Flex>
    </Modal>
  );
}
