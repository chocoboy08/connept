"use client";

import { Logo } from "@/assets/icons";
import Button from "@/components/base/Button";
import Flex from "@/components/base/Flex";
import Text from "@/components/base/Text";
import { useRouter } from "next/navigation";

import { useState } from "react";

type UserType = "student" | "tutor";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<{
    type: UserType;
    id: string;
    password: string;
  }>({
    type: "student",
    id: "",
    password: "",
  });

  return (
    <Flex direction="column" align="center" className="pt-30">
      <Flex direction="column" align="center" className="max-w-xl" gap={50}>
        <Flex direction="column" align="center">
          <Logo width={54} height={54} />
          <Text size={44} weight={700} color="var(--color-main)">
            Connept
          </Text>
        </Flex>
        <div className="relative w-full ">
          <Flex>
            <button
              className="flex-1 w-65 pb-7"
              onClick={() => setFormData({ ...formData, type: "student" })}
            >
              <Text
                size={30}
                weight={600}
                color={
                  formData.type === "student"
                    ? "var(--color-main)"
                    : "var(--color-text)"
                }
              >
                학생 모드
              </Text>
            </button>
            <button
              className="flex-1 w-65 pb-7"
              onClick={() => setFormData({ ...formData, type: "tutor" })}
            >
              <Text
                size={30}
                weight={600}
                color={
                  formData.type === "tutor"
                    ? "var(--color-main)"
                    : "var(--color-text)"
                }
              >
                선생님 모드
              </Text>
            </button>
          </Flex>
          <div
            className="w-full rounded-full"
            style={{
              height: "6px",
              backgroundColor: "#D1D5DB",
            }}
          />

          <div
            className="absolute bottom-0 rounded-full transition-transform duration-300 ease-in-out"
            style={{
              height: "6px",
              width: "50%",
              backgroundColor: "var(--color-main)",
              transform:
                formData.type === "student"
                  ? "translateX(0%)"
                  : "translateX(100%)",
            }}
          />
        </div>
        <Flex direction="column" gap={30} className="w-full">
          <input
            placeholder="아이디"
            className="w-full border-2 border-[#CAC5CD] rounded-[20px] text-[24px] pl-8 py-4"
            value={formData.id}
            onChange={(e) => setFormData({ ...formData, id: e.target.value })}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full border-2 border-[#CAC5CD] rounded-[20px] text-[24px] pl-8 py-4"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </Flex>
        <Button
          onClickHandler={() => {
            router.push("/myStudy");
          }}
          fontSize={26}
          height={77}
        >
          로그인
        </Button>
      </Flex>
    </Flex>
  );
}
