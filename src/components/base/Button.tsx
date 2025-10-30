import { CSSProperties, PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  bgColor?: string;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}

export default function Button({
  children,
  bgColor = "#725AF5",
  width = "100%",
  height = "fit-content",
}: ButtonProps) {
  return (
    <button
      className="flex justify-center items-center rounded-lg cursor-pointer"
      style={{
        backgroundColor: bgColor,
        width: width,
        height: height,
      }}
    >
      {children}
    </button>
  );
}
