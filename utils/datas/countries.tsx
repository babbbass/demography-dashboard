export const WORLD_PIB = 100
export const TOP10_PIB = [
  {
    name: "Etats-Unis",
    PIB_2022: 25.3,
    PIB_2021: 22.6,
    color: "#22427C",
  },
  {
    name: "France",
    PIB_2022: 2.9,
    PIB_2021: 2.9,
    color: "#0080FF",
  },
  {
    name: "Chine",
    PIB_2022: 19.9,
    PIB_2021: 16.6,
    color: "#850606",
  },
  {
    name: "Inde",
    PIB_2022: 3.3,
    PIB_2021: 3.0,
    color: "green",
  },
  {
    name: "Japon",
    PIB_2022: 4.9,
    PIB_2021: 5.3,
    color: "#fafafa",
  },
  {
    name: "Allemagne",
    PIB_2022: 4.3,
    PIB_2021: 4.3,
    color: "orange",
  },
  {
    name: "Royaume-Uni",
    PIB_2022: 3.4,
    PIB_2021: 3.1,
    color: "blue",
  },
  {
    name: "Canada",
    PIB_2022: 2.2,
    PIB_2021: 1.8,
    color: "#F00020",
  },
  {
    name: "Italie",
    PIB_2022: 2.1,
    PIB_2021: 2.1,
    color: "purple",
  },
  {
    name: "Brésil",
    PIB_2022: 1.8,
    PIB_2021: 1.6,
    color: "yellow",
  },
]

export const SUM_TOP_10 = TOP10_PIB.reduce((acc, country) => {
  return acc + country.PIB_2022
}, 0)
