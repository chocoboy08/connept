import Box from "@/components/base/Box";
import Flex from "@/components/base/Flex";
import Text from "@/components/base/Text";
import ResultContent from "@/components/ResultContent";
import RoadMap from "@/components/RoadMap";

const resultData = {};

export default function ResultPage() {
  return (
    <Flex gap={30} className="flex-1">
      <Flex direction="column" className="flex-1">
        <Box paddingX={32} paddingY={25} center={false}>
          <Flex direction="column" gap={10}>
            <Text as={"h1"} size={22} weight={700}>
              문제풀이 결과
            </Text>
            <Text as={"h2"} weight={600} color="#4B5563">
              로그함수의 최대최소
            </Text>
          </Flex>
          <Flex direction="column" gap={35} className="mt-4 mb-10">
            <ResultContent
              type="incorrect"
              rightAnswer="0.9659"
              myAnswer="0.866"
            />
            <ResultContent
              type="correct"
              rightAnswer="0.9659"
              myAnswer="0.866"
            />
            <ResultContent
              type="incorrect"
              rightAnswer="0.9659"
              myAnswer="0.866"
            />
            <ResultContent
              type="incorrect"
              rightAnswer="0.9659"
              myAnswer="0.866"
            />
          </Flex>
        </Box>
      </Flex>
      <RoadMap />
    </Flex>
  );
}
