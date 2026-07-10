import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function SeverityChart({ stats }) {

  const data = {
    labels: [
      "Critical",
      "High",
      "Medium",
      "Low",
    ],

    datasets: [
      {
        data: [
          stats.critical,
          stats.high,
          stats.medium,
          stats.low,
        ],

        backgroundColor: [
          "#ef4444",
          "#f97316",
          "#eab308",
          "#22c55e",
        ],

        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="chart-card">

      <h2>Severity Distribution</h2>

      <Pie data={data} />

    </div>
  );
}

export default SeverityChart;