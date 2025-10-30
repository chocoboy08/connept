import { CSSProperties, PropsWithChildren } from "react";

interface BoxProps extends PropsWithChildren {
  width?: CSSProperties["width"];
  paddingX?: number;
  paddingY?: number;
  color?: string;
}

export default function Box({
  children,
  width = "100%",
  paddingX = 0,
  paddingY = 0,
  color = "#fff",
}: BoxProps) {
  return (
    <div
      className={` shadow-[0_2px_2px_0_rgba(0,0,0,0.06)] rounded-2xl`}
      style={{
        width: width,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingBottom: paddingY,
        paddingTop: paddingY,
        backgroundColor: color,
      }}
    >
      {children}
    </div>
  );
}
