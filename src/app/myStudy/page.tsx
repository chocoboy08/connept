import Box from "@/components/base/Box";
import Flex from "@/components/base/Flex";
import Text from "@/components/base/Text";
import Content from "@/components/Content";
import EmptyContent from "@/components/EmptyContent";
import { testContent, testEmptyContent } from "@/constants/mockData";
import IconCheckedCircle from "../../../public/icons/icon_checked_circle.svg";
import IconEmptyCircle from "../../../public/icons/icon_empty_circle.svg";

export default function page() {
  return (
    <Flex direction="column" gap={50} className="pl-[50px] overflow-hidden">
      <Flex direction="column" gap={12}>
        <Text size={22} weight={600} color="#000">
          안녕하세요, 김민준님!
        </Text>
        <Text size={14} weight={400} color="#909090">
          연속 학습 5일째입니다! 오늘도 힘차게 학습해볼까요?
        </Text>
        <Flex gap={22}>
          <Box paddingX={16} paddingY={16}>
            <Text size={14} weight={400} color="#5E5E5E">
              연속학습
            </Text>
            <Flex gap={28}>
              <Flex align="flex-end" gap={4}>
                <Text size={24} weight={600} color="#725AF5" height={"24px"}>
                  5
                </Text>
                <Text size={14} weight={400} color="#5E5E5E">
                  일차
                </Text>
              </Flex>
              <Flex gap={5}>
                <IconCheckedCircle />
                <IconCheckedCircle />
                <IconCheckedCircle />
                <IconCheckedCircle />
                <IconCheckedCircle />
                <IconEmptyCircle />
                <IconEmptyCircle />
              </Flex>
            </Flex>
          </Box>
          <Box paddingX={16} paddingY={16} width={"142px"}>
            <Text size={14} weight={400} color="#5E5E5E">
              오늘 완료한 문제
            </Text>
            <Flex align="flex-end" gap={4}>
              <Text size={24} weight={600} color="#3f3f3f" height={"24px"}>
                45
              </Text>
              <Text size={14} weight={400} color="#5E5E5E">
                문제
              </Text>
            </Flex>
          </Box>
          <Box paddingX={16} paddingY={16} width={"172px"}>
            <Text size={14} weight={400} color="#5E5E5E">
              오늘 학습한 공백 개념
            </Text>
            <Flex align="flex-end" gap={4}>
              <Text size={24} weight={600} color="#3f3f3f" height={"24px"}>
                4
              </Text>
              <Text size={14} weight={400} color="#5E5E5E">
                개념
              </Text>
            </Flex>
          </Box>
          <Box paddingX={16} paddingY={16} width={"172px"}>
            <Text size={14} weight={400} color="#5E5E5E">
              학습 시간
            </Text>
            <Flex align="flex-end" gap={4}>
              <Text size={24} weight={600} color="#3f3f3f" height={"24px"}>
                2
              </Text>
              <Text size={14} weight={400} color="#5E5E5E">
                시간
              </Text>
              <Text size={24} weight={600} color="#3f3f3f" height={"24px"}>
                15
              </Text>
              <Text size={14} weight={400} color="#5E5E5E">
                분
              </Text>
            </Flex>
          </Box>
          <Box paddingX={16} paddingY={16} width={"142px"}>
            <Text size={14} weight={400} color="#5E5E5E">
              일일 목표 달성률
            </Text>
            <Flex align="flex-end" gap={2}>
              <Text size={24} weight={600} color="#3f3f3f" height={"24px"}>
                83
              </Text>
              <Text size={14} weight={400} color="#5E5E5E">
                %
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>

      <Flex direction="column" gap={45}>
        <Text size={22} weight={700}>
          오늘 준비된 학습 콘텐츠
        </Text>
        <Flex
          gap={30}
          className="overflow-scroll"
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

      <Flex direction="column" gap={45}>
        <Text size={22} weight={700}>
          공백 개념 해소율
        </Text>
        <div
          className="grid grid-rows-2 grid-flow-col gap-[30px] overflow-x-auto overflow-y-hidden"
          style={{ scrollbarWidth: "none", height: 460 }}
        >
          {testEmptyContent.map((item, idx) => (
            <EmptyContent
              key={`empty-content-${item.title}-${idx}`}
              title={item.title}
              questionNumber={item.questionNumber}
              conceptNum={item.conceptNum}
              correct={item.correct}
              progress={item.progress}
            />
          ))}
        </div>
      </Flex>
    </Flex>
  );
}
