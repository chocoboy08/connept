"use client";

import { IconArrowDown } from "@/assets/icons";
import { useState } from "react";
import Flex from "./base/Flex";
import Text from "./base/Text";

interface ConceptToggleProps {
  title: string;
  description: string;
}

export default function ConceptToggle({
  title,
  description,
}: ConceptToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="w-fit" onClick={() => setIsOpen(!isOpen)}>
        <Flex align="center">
          <Text size={12}>{title}</Text>
          <IconArrowDown
            width={20}
            height={20}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </Flex>
      </button>
      {isOpen && (
        <Text size={12} color="#6B7280" wrap="break-spaces">
          {description}
        </Text>
      )}
    </div>
  );
}
