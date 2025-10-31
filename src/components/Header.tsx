import Link from "next/link";
import IconAlert from "../../public/icons/icon_alert.svg";
import Logo from "../../public/icons/logo.svg";
import Flex from "./base/Flex";
import Text from "./base/Text";

export default function Header() {
  return (
    <header>
      <Flex
        align="center"
        justify="space-between"
        className="bg-white shadow-[0_2px_2px_0_rgba(0,0,0,0.06)] py-4 px-4 md:px-20"
      >
        <Flex align="center" gap={10}>
          <Logo />
          <Text size={22} weight={700} color="#725AF5">
            Connept
          </Text>
        </Flex>
        <nav aria-label="주요 메뉴">
          <Flex gap={82}>
            <Link href={"/myStudy"}>
              <Text size={20} weight={400} color="#725AF5">
                내 학습
              </Text>
            </Link>
            <Link href={"/study"}>
              <Text size={20} weight={400} color="#4B5563">
                학습하기
              </Text>
            </Link>
            <Link href={"/history"}>
              <Text size={20} weight={400} color="#4B5563">
                학습기록
              </Text>
            </Link>
          </Flex>
        </nav>
        <Flex align="center" gap={8}>
          <button
            aria-label="알림"
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "#F3F4F6",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconAlert />
          </button>
          <Flex
            aria-label="프로필"
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "#725AF5",
              color: "#fff",
            }}
            justify="center"
            align="center"
          >
            김
          </Flex>
          <Text size={16} weight={400} color="#374151">
            김민준 님
          </Text>
        </Flex>
      </Flex>
    </header>
  );
}
