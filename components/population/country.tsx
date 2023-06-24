"use client"
import React from "react"
import { Line as LineChart } from "react-chartjs-2"
import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js"
import { countryPopulation } from "@/utils/datas/population"
import { datalabelsConfig } from "@/config"

ChartJS.register(PointElement, LineElement, CategoryScale, LinearScale)

const data = {
  labels: countryPopulation.map((pop) => pop.name),
  datasets: [
    {
      label: "en millions",
      data: countryPopulation.map((pop) => pop.population.toFixed(0)),
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

export default function Country() {
  return <LineChart data={data} options={options} height={180} />
}
