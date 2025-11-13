import Box from "./base/Box";
import Flex from "./base/Flex";
import Text from "./base/Text";
import StudyRoadMapItem from "./StudyRoadMapItem";

const mock = [
  { title: "미분계수", progress: 100 },
  { title: "삼각함수", progress: 50 },
  { title: "합성함수의 미분법", progress: 0 },
];
export default function StudyRoadMap() {
  return (
    <Box paddingX={28} paddingY={25} center={false}>
      <Flex direction="column" gap={34}>
        <Text as={"h1"} size={22} weight={700}>
          학습 로드맵
        </Text>
        <Flex direction="column" className="w-75">
          {mock.map((item, idx) => (
            <Flex gap={12} key={`roadmap-${item.title}-${idx}`}>
              <Flex direction="column" align="center">
                <div
                  className={`size-2.5 rounded-full ${
                    item.progress === 100
                      ? "bg-correct"
                      : item.progress === 0
                      ? "bg-[#D1D5DB]"
                      : "bg-main"
                  }`}
                />
                <hr className="w-0.5 bg-[#D1D5DB] border-none flex-1" />
              </Flex>
              <StudyRoadMapItem title={item.title} isChain />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
