"use client";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Text from "./base/Text";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ProgressChartProps {
  percent: number;
}

export default function ProgressChart({ percent }: ProgressChartProps) {
  const chartColor =
    percent === 100
      ? "#725AF5"
      : percent < 50
      ? "#FF6161"
      : percent < 80
      ? "#FFBB00"
      : "#57CF83";
  const data = {
    datasets: [
      {
        data: [100 - percent, percent],
        backgroundColor: ["transparent", chartColor],
        borderRadius: percent === 100 ? 0 : 20,
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };
  const back = {
    datasets: [
      {
        data: [100],
        backgroundColor: ["#E5E7EB"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };
  const options = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };
  return (
    <div style={{ position: "relative", width: "fit-content" }}>
      <div style={{ width: 114 }}>
        <Doughnut data={back} options={options} />
      </div>
      <div style={{ width: 114, position: "absolute", top: 0, zIndex: 1 }}>
        <Doughnut data={data} options={options} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Text size={25} weight={600} color="#5C5C5C">
          {percent}
        </Text>
      </div>
    </div>
  );
}
