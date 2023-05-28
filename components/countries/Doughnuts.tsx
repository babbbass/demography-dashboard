import { Doughnut as DoughnutChart } from "react-chartjs-2"
import { TOP10_PIB, WORLD_PIB, SUM_TOP_10 } from "@/utils/datas/countries"
import { percentage } from "@/utils/functions"
import { datalabelsConfig } from "@/config"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement)

const otherCountryPib = WORLD_PIB - SUM_TOP_10

const doughnutsData = {
  labels: [...TOP10_PIB.map((country) => country.name), "otherCountries"],
  datasets: [
    {
      data: [
        ...TOP10_PIB.map((country) => {
          return percentage(country.PIB_2022)
        }),
        percentage(otherCountryPib),
      ],
      backgroundColor: [
        ...TOP10_PIB.map((country) => country.color),
        "#00ff00",
      ],
    },
  ],
}

const doughnutsOptions = {
  responsive: true,
  plugins: {
    datalabels: datalabelsConfig,
    title: {
      display: true,
      color: "rgb(75, 192, 192)",
      text: "Répartition du PIB dans le monde",
      font: {
        size: 20,
      },
    },
    subtitle: {
      display: true,
      // color: "#000",
      text: "en pourcentage",
      font: {
        size: 16,
      },
    },
    legend: {
      position: "left" as const,
    },
    maintainAspectRatio: false,
  },
}
export function Doughnuts() {
  return (
    <DoughnutChart
      data={doughnutsData}
      options={doughnutsOptions}
      // height={400}
    />
  )
}
