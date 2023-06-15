import { Bar as BarChart } from "react-chartjs-2"
import { TOP10_PIB } from "@/utils/datas/countries"
import { datalabelsConfig } from "@/config"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement)

const data = {
  labels: TOP10_PIB.map((country) => country.name),
  datasets: [
    {
      label: "PIB 2022",
      data: TOP10_PIB.map((country) => country.PIB_2022),
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "PIB 2021",
      data: TOP10_PIB.map((country) => country.PIB_2021),
      backgroundColor: "red",
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    datalabels: { ...datalabelsConfig, rotation: 90 },
    maintainAspectRatio: false,
  },
  scales: {
    y: {
      ticks: {
        callback: function (value: any) {
          return `${value}`
        },
      },
    },
  },
}

export function Bar() {
  return <BarChart data={data} height={500} width={500} options={options} />
}
