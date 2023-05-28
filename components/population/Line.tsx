import { Line as LineChart } from "react-chartjs-2"
import {
  Chart as ChartJS,
  // CategoryScale,
  // LinearScale,
  PointElement,
  LineElement,
  // BarElement,
  // ArcElement,
} from "chart.js"
import { worldPopulation } from "@/utils/datas/population"

ChartJS.register(
  // CategoryScale,
  // LinearScale,
  // BarElement,
  // ArcElement,
  PointElement,
  LineElement
)

const data = {
  labels: worldPopulation.map((pop) => pop.year),
  datasets: [
    {
      label: "Population mondiale depuis 1950",
      data: worldPopulation.map((pop) => pop.population),
      fill: false,
      borderColor: "rgb(75, 192, 192)",
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "",
      font: {
        size: 16,
      },
    },
    maintainAspectRatio: true,
  },
}

export default function Line() {
  return <LineChart data={data} options={options} height={300} />
}
