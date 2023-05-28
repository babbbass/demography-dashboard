"use client"
import { wealth } from "@/utils/datas/wealth"
import { datalabelsConfig } from "@/config"
import ChartDataLabels from "chartjs-plugin-datalabels"
import { Bar } from "react-chartjs-2"
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  SubTitle,
  Legend,
} from "chart.js"
Chart.register(
  SubTitle,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  Legend,
  ChartDataLabels
)

const labels = wealth.map((character) => character.name)
const data = {
  labels,
  datasets: [
    {
      label: "$ US",
      data: wealth.map((character) => character.wealth_2023),
      backgroundColor: "rgb(75, 192, 192)",
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    datalabels: datalabelsConfig,
    title: {
      display: true,
      text: "Les + grosses fortunes en 2023",
      color: "#000",

      font: {
        size: 20,
      },
    },
    subtitle: {
      display: true,
      text: "source: Forbes",
    },
  },
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        callback: function (value: any) {
          return `$${value} Milliards`
        },
      },
    },
  },
}

export default function Wealth() {
  return <Bar options={options} data={data} height={250} width={400} />
}
