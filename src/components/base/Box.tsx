import { CSSProperties, PropsWithChildren } from "react";

interface BoxProps extends PropsWithChildren {
  width?: CSSProperties["width"];
  paddingX?: number;
  paddingY?: number;
  color?: string;
  border?: CSSProperties["border"];
  withShadow?: boolean;
  center?: boolean;
}

export default function Box({
  children,
  width = "auto",
  paddingX = 0,
  paddingY = 0,
  color = "#fff",
  border,
  withShadow = true,
  center = true,
}: BoxProps) {
  return (
    <div
      className={`flex flex-col ${center ? "justify-center" : ""} ${
        withShadow ? "shadow-[0_2px_2px_0_rgba(0,0,0,0.06)]" : ""
      } rounded-2xl`}
      style={{
        width: width,
        minWidth: width,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingBottom: paddingY,
        paddingTop: paddingY,
        backgroundColor: color,
        border: border,
      }}
    >
      {children}
    </div>
  );
}
