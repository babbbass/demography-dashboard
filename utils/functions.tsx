import { WORLD_PIB } from "@/utils/datas/countries"

export function percentage(pib: number) {
  const result = (pib / WORLD_PIB) * 100

  return `${result.toFixed(1)}`
}
