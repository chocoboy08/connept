"use client";

interface ProgressBarProps {
  percent: number;
}

export default function ProgressBar({ percent }: ProgressBarProps) {
  const chartColor =
    percent === 100
      ? "#725AF5"
      : percent < 50
      ? "#FF6161"
      : percent < 80
      ? "#FFBB00"
      : "#57CF83";

  return (
    <div className="rounded-full bg-[#E5E7EB] w-17.5 h-2 mr-1">
      <div
        className="rounded-full h-full transition-all duration-300"
        style={{
          width: `${percent}%`,
          backgroundColor: chartColor,
        }}
      />
    </div>
  );
}
