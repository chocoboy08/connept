import { CSSProperties, HTMLAttributes } from "react";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  gap?: number;
  style?: CSSProperties;
  className?: string;
}

export default function Flex({
  children,
  direction = "row",
  justify = "stretch",
  align = "stretch",
  gap = 0,
  style,
  className,
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
      className={`flex ${className}`}
    >
      {children}
    </div>
  );
}
