import Box from "./base/Box";
import Flex from "./base/Flex";
import Text from "./base/Text";
import RoadMapItem from "./RoadMapItem";

const mock = ["삼각비의 활용", "삼각함수의 덧셈정리"];

export default function RoadMap() {
  return (
    <Box paddingX={28} paddingY={25} center={false}>
      <Flex direction="column" gap={34}>
        <Text as={"h1"} size={22} weight={700}>
          맞춤 학습 로드맵
        </Text>
        <div>
          {mock.map((item, idx) => (
            <Flex gap={12} key={`roadmap-${item}-${idx}`}>
              <Flex direction="column" align="center" gap={8}>
                <div className="size-8 bg-main rounded-full text-white text-[14px] text-center leading-8">
                  {idx + 1}
                </div>
                <hr className="w-0.5 bg-[#E2E8F0] border-none flex-1" />
              </Flex>
              <RoadMapItem title={item} />
            </Flex>
          ))}
        </div>
      </Flex>
    </Box>
  );
}
