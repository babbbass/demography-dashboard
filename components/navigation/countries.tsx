"use client"
import { useState } from "react"

export default function NavigationCountries() {
  const [displayComponent, setDisplayComponent] = useState("Pays")
  const [active, setActive] = useState(true)
  return (
    <button
      onClick={() => {
        setDisplayComponent("Pays")
        setActive(true)
        // setActiveWealth(false)
        // setActivePopulation(false)
      }}
      className={`${
        active ? "bg-regal-blue" : ""
      } flex items-center justify-center lg:h-auto lg:w-full h-full cursor-pointer p-4 rounded-lg`}
    >
      <span>Pays</span>
    </button>
  )
}
