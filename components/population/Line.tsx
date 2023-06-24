"use client"
import { Line as LineChart } from "react-chartjs-2"
import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js"
import { worldPopulation } from "@/utils/datas/population"
import { datalabelsConfig } from "@/config"

ChartJS.register(PointElement, LineElement, CategoryScale, LinearScale)

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
    datalabels: datalabelsConfig,
    title: {
      display: true,
      text: "",
      font: {
        size: 16,
      },
    },
    // maintainAspectRatio: false,
  },
}

export default function Line() {
  return <LineChart height={180} data={data} options={options} />
}
