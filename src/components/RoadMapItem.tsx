import Box from "./base/Box";
import Flex from "./base/Flex";
import Text from "./base/Text";

interface RoadMapItemProp {
  title: string;
}

export default function RoadMapItem({ title }: RoadMapItemProp) {
  return (
    <Flex direction="column" gap={12} className="mb-6">
      <Text as={"h2"}>{title}</Text>
      <Box
        paddingX={16}
        paddingY={13}
        color="#EFF6FF"
        width={300}
        border={"1px solid #DBEAFE"}
        withShadow={false}
      >
        <Text as={"h3"} size={14} color="#374151">
          개념학습
        </Text>
        <Text size={12} color="#374151">
          {title}의 기본 개념과 원리를 이해합니다.
        </Text>
      </Box>
      <Box
        paddingX={16}
        paddingY={13}
        color="#EEF2FF"
        width={300}
        border={"1px solid #E0E7FF"}
        withShadow={false}
      >
        <Text as={"h3"} size={14} color="#374151">
          기본문제풀이
        </Text>
        <Text size={12} color="#374151">
          {title}의 기초 응용 문제를 풀어봅니다.
        </Text>
      </Box>
      <Box
        paddingX={16}
        paddingY={13}
        color="#FAF5FF"
        width={300}
        border={"1px solid #F3E8FF"}
        withShadow={false}
      >
        <Text as={"h3"} size={14} color="#374151">
          연계문제풀이
        </Text>
        <Text size={12} color="#374151">
          {title}의 심화 응용 문제를 풀어봅니다.
        </Text>
      </Box>
    </Flex>
  );
}
