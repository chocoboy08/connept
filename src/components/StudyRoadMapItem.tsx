"use client";

import { IconArrowDown } from "@/assets/icons";
import { useState } from "react";
import Flex from "./base/Flex";
import Text from "./base/Text";

interface StudyRoadMapItemProp {
  title: string;
  isChain: boolean;
}

export default function StudyRoadMapItem({
  title,
  isChain,
}: StudyRoadMapItemProp) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex direction="column" className="flex-1 -mt-10 py-6">
      <button
        className="flex items-center justify-between py-2"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <Flex gap={6} align="center">
          <Text>{title}</Text>
          {isChain && (
            <div className={`rounded-full px-2.5 py-1.5 bg-[#E6DFFF]`}>
              <Text size={12} color={"var(--color-main)"}>
                연계
              </Text>
            </div>
          )}
        </Flex>
        <Flex
          className="size-6 rounded-full bg-[#F3F4F6]"
          align="center"
          justify="center"
        >
          <IconArrowDown width={16} height={16} />
        </Flex>
      </button>

      {isOpen && (
        <Flex gap={5} align="center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#6B7280]" />
          <Text size={12} color="#6B7280">
            지수함수 미분
          </Text>
        </Flex>
      )}
    </Flex>
  );
}
