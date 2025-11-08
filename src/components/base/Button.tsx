import { CSSProperties, PropsWithChildren } from "react";
import Text from "./Text";

interface ButtonProps extends PropsWithChildren {
  type?: "normal" | "outline";
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  fontSize?: CSSProperties["fontSize"];
  onClickHandler: () => void;
  color?: CSSProperties["color"];
  fontWeight?: 400 | 600 | 700;
}

export default function Button({
  children,
  type = "normal",
  width = "100%",
  height = "fit-content",
  fontSize,
  onClickHandler,
  color,
  fontWeight = 600,
}: ButtonProps) {
  return (
    <button
      onClick={onClickHandler}
      className={`flex justify-center items-center rounded-xl  ${
        type === "normal" ? "bg-main" : `bg-white border border-main`
      }`}
      style={{
        width: width,
        height: height,
        ...(color &&
          type === "outline" && { borderColor: color, color: color }),
      }}
    >
      <Text
        size={fontSize}
        weight={fontWeight}
        color={
          color ? color : type === "normal" ? "white" : "var(--color-main)"
        }
      >
        {children}
      </Text>
    </button>
  );
}
