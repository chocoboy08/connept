import { ElementType, PropsWithChildren } from "react";

interface TextProps extends PropsWithChildren {
  as?: ElementType;
  size?: number;
  weight?: 400 | 600 | 700;
  color?: string;
}

export default function Text({
  children,
  as: Tag = "p",
  size = 16,
  weight = 400,
  color = "#000",
}: TextProps) {
  return (
    <Tag
      style={{
        fontSize: size,
        fontWeight: weight,
        wordBreak: "keep-all",
        color: color,
      }}
    >
      {children}
    </Tag>
  );
}
