import Logo from "../../public/icons/logo.svg";
import Flex from "./base/Flex";
import Text from "./base/Text";

export default function Header() {
  return (
    <Flex
      align="center"
      justify="space-between"
      className="bg-white shadow-[0_2px_2px_0_rgba(0,0,0,0.06)]"
      style={{
        paddingRight: 80,
        paddingLeft: 80,
        paddingTop: 16,
        paddingBottom: 16,
      }}
    >
      <Flex align="center" gap={10}>
        <Logo />
        <Text size={22} weight={700} color="#725AF5">
          Connept
        </Text>
      </Flex>
      <Flex gap={82}>
        <Text size={20} weight={400} color="#725AF5">
          내 학습
        </Text>
        <Text size={20} weight={400} color="#4B5563">
          학습하기
        </Text>
        <Text size={20} weight={400} color="#4B5563">
          학습기록
        </Text>
      </Flex>
      <Flex align="center" gap={8}>
        <Flex
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#F3F4F6",
          }}
          justify="center"
          align="center"
        >
          알림
        </Flex>
        <Flex
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
  );
}
