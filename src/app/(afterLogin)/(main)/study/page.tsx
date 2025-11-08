import Flex from "@/components/base/Flex";
import Text from "@/components/base/Text";
import Content from "@/components/Content";
import { testContent } from "@/constants/mockData";

export default function page() {
  return (
    <Flex direction="column" gap={50}>
      <Flex direction="column" gap={45} className="ml-20">
        <Text size={22} weight={700}>
          현행 학습
        </Text>
        <Flex
          gap={30}
          className="overflow-scroll -ml-20 pl-20"
          style={{ scrollbarWidth: "none" }}
        >
          {testContent.map((item, idx) => (
            <Content
              key={`current-${item.title}-${idx}`}
              title={item.title}
              number={item.number}
              time={item.time}
              difficulty={item.difficulty}
              type={item.type}
            />
          ))}
        </Flex>
      </Flex>
      <Flex direction="column" gap={45} className="ml-20">
        <Text size={22} weight={700}>
          공백 학습
        </Text>
        <Flex
          gap={30}
          className="overflow-scroll -ml-20 pl-20"
          style={{ scrollbarWidth: "none" }}
        >
          {testContent.map((item, idx) => (
            <Content
              key={`content-${item.title}-${idx}`}
              title={item.title}
              number={item.number}
              time={item.time}
              difficulty={item.difficulty}
              type={item.type}
            />
          ))}
        </Flex>
      </Flex>
      <Flex direction="column" gap={45} className="ml-20">
        <Text size={22} weight={700}>
          복습 콘텐츠
        </Text>
        <Flex
          gap={30}
          className="overflow-scroll -ml-20 pl-20"
          style={{ scrollbarWidth: "none" }}
        >
          {testContent.map((item, idx) => (
            <Content
              key={`content-${item.title}-${idx}`}
              title={item.title}
              number={item.number}
              time={item.time}
              difficulty={item.difficulty}
              type={item.type}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
