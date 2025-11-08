"use client";

import { SubmitCheck } from "@/assets/icons";
import Button from "@/components/base/Button";
import Flex from "@/components/base/Flex";
import Modal from "@/components/base/Modal";
import Text from "@/components/base/Text";
import { useRouter } from "next/navigation";

export default function SubmitConfirmModal() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const handleConfirm = () => {
    console.log("답안 제출");
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <Flex direction="column" gap={24} align="center">
        <Flex direction="column" gap={10} align="center">
          <Text size={18} weight={600} color="#1C1C1E">
            답안을 제출한 후에는 수정할 수 없어요!
          </Text>
          <Text size={18} weight={600} color="#1C1C1E">
            한 번 더 검토해 볼까요?
          </Text>
        </Flex>

        <SubmitCheck />

        <Flex gap={30} className="w-full">
          <Button
            onClickHandler={handleClose}
            type="outline"
            height={40}
            fontSize={14}
          >
            검토하기
          </Button>
          <Button onClickHandler={handleConfirm} height={40} fontSize={14}>
            제출하기
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
}
