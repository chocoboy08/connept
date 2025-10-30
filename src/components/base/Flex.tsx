import { CSSProperties, HTMLAttributes } from "react";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  gap?: number;
  style?: CSSProperties;
}

export default function Flex({
  children,
  direction = "row",
  justify = "stretch",
  align = "stretch",
  gap = 0,
  style,
}: FlexProps) {
  return (
    <div
      style={{
        flexDirection: direction,
        gap: gap,
        justifyContent: justify,
        alignItems: align,
        ...style,
      }}
      className={`flex`}
    >
      {children}
    </div>
  );
}
