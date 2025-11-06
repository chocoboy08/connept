import { CSSProperties, ElementType, PropsWithChildren } from "react";

interface TextProps extends PropsWithChildren {
  as?: ElementType;
  size?: CSSProperties["fontSize"];
  weight?: 400 | 600 | 700;
  color?: string;
  height?: CSSProperties["lineHeight"];
}

export default function Text({
  children,
  as: Tag = "p",
  size = 16,
  weight = 400,
  color = "#000",
  height,
}: TextProps) {
  return (
    <Tag
      style={{
        fontSize: size,
        fontWeight: weight,
        wordBreak: "keep-all",
        color: color,
        lineHeight: height,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </Tag>
  );
}
