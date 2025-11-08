"use client";

import { IconClose } from "@/assets/icons";
import Flex from "@/components/base/Flex";
import Modal from "@/components/base/Modal";
import Text from "@/components/base/Text";
import { useRouter } from "next/navigation";

export default function ExplanationModal() {
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
      <Flex gap={30} className="mt-8">
        <Flex direction="column" className="w-sm" gap={24}>
          <Text size={24}>문제 3</Text>
          <div className="w-full h-[1.5px] bg-[#4B5563]" />
          <Text>다음 함수의 최솟값을 구하시오.</Text>
        </Flex>
        <Flex
          direction="column"
          className="overflow-y-scroll size-120 bg-background-primary rounded-[20px] p-9 break-keep [&::-webkit-scrollbar]:w-9 [&::-webkit-scrollbar-track]:my-4   [&::-webkit-scrollbar-thumb]:bg-[#D9D9D9] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:border-background-primary [&::-webkit-scrollbar-thumb]:border-13"
        >
          함수 $f(x) = x^2 + 3x - 2$의 $x=2$에서의 미분계수를 구하기 위해, 먼저
          이 함수의 도함수 $f'(x)$를 구합니다. 미분법칙에 따라, $x^2$를 미분하면
          $2x$가 되고, $3x$를 미분하면 $3$이 되며, 상수항 $-2$는 미분하면 $0$이
          됩니다. 따라서 도함수는 $f'(x) = 2x + 3$이 됩니다. 다음으로,
          $x=2$에서의 미분계수를 얻기 위해 이 도함수 $f'(x)$에 $x$ 대신 $2$를
          대입합니다.함수 $f(x) = x^2 + 3x - 2$의 $x=2$에서의 미분계수를 구하기
          위해, 먼저 이 함수의 도함수 $f'(x)$를 구합니다. 미분법칙에 따라,
          $x^2$를 미분하면 $2x$가 되고, $3x$를 미분하면 $3$이 되며, 상수항
          $-2$는 미분하면 $0$이 됩니다. 따라서 도함수는 $f'(x) = 2x + 3$이
          됩니다. 다음으로, $x=2$에서의 미분계수를 얻기 위해 이 도함수 $f'(x)$에
          $x$ 대신 $2$를 대입합니다.함수 $f(x) = x^2 + 3x - 2$의 $x=2$에서의
          미분계수를 구하기 위해, 먼저 이 함수의 도함수 $f'(x)$를 구합니다.
          미분법칙에 따라, $x^2$를 미분하면 $2x$가 되고, $3x$를 미분하면 $3$이
          되며, 상수항 $-2$는 미분하면 $0$이 됩니다. 따라서 도함수는 $f'(x) = 2x
          + 3$이 됩니다. 다음으로, $x=2$에서의 미분계수를 얻기 위해 이 도함수
          $f'(x)$에 $x$ 대신 $2$를 대입합니다.함수 $f(x) = x^2 + 3x - 2$의
          $x=2$에서의 미분계수를 구하기 위해, 먼저 이 함수의 도함수 $f'(x)$를
          구합니다. 미분법칙에 따라, $x^2$를 미분하면 $2x$가 되고, $3x$를
          미분하면 $3$이 되며, 상수항 $-2$는 미분하면 $0$이 됩니다. 따라서
          도함수는 $f'(x) = 2x + 3$이 됩니다. 다음으로, $x=2$에서의 미분계수를
          얻기 위해 이 도함수 $f'(x)$에 $x$ 대신 $2$를 대입합니다.함수 $f(x) =
          x^2 + 3x - 2$의 $x=2$에서의 미분계수를 구하기 위해, 먼저 이 함수의
          도함수 $f'(x)$를 구합니다. 미분법칙에 따라, $x^2$를 미분하면 $2x$가
          되고, $3x$를 미분하면 $3$이 되며, 상수항 $-2$는 미분하면 $0$이 됩니다.
          따라서 도함수는 $f'(x) = 2x + 3$이 됩니다. 다음으로, $x=2$에서의
          미분계수를 얻기 위해 이 도함수 $f'(x)$에 $x$ 대신 $2$를 대입합니다.
        </Flex>
      </Flex>
    </Modal>
  );
}
