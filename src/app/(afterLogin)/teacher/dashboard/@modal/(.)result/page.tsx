"use client";
import { IconClose } from "@/assets/icons";
import Flex from "@/components/base/Flex";
import Modal from "@/components/base/Modal";
import Text from "@/components/base/Text";
import ResultContent from "@/components/ResultContent";
import { useRouter } from "next/navigation";

export default function ResultModal() {
  const router = useRouter();
  return (
    <Modal
      onClose={() => {
        router.back();
      }}
    >
      <button
        className="absolute top-4 right-4 cursor-pointer"
        onClick={() => router.back()}
      >
        <IconClose width={34} height={34} fill="#868686" />
      </button>
      <Text size={20} weight={600}>
        문제 풀이 결과
      </Text>
      <div className="border border-[#D4D4D4] mt-6" />
      <Flex direction="column" className="px-8  max-h-[80vh] overflow-y-auto">
        <div className="w-full h-[1.5px] bg-[#4B5563]" />
        <Flex direction="column" gap={35} className="w-150 mt-4 mb-10">
          <ResultContent
            type="incorrect"
            rightAnswer="0.9659"
            myAnswer="0.866"
          />
          <ResultContent type="correct" rightAnswer="0.9659" myAnswer="0.866" />
          <ResultContent
            type="incorrect"
            rightAnswer="0.9659"
            myAnswer="0.866"
          />
          <ResultContent
            type="incorrect"
            rightAnswer="0.9659"
            myAnswer="0.866"
          />
        </Flex>
      </Flex>
    </Modal>
  );
}
