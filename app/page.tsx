"use client"
import Image from "next/image"
import { useState } from "react"
import Countries from "@/components/countries"
import Wealth from "@/components/wealth"
import Population from "@/components/population"
import Link from "next/link"
import Footer from "@/components/footer"

export default function Home() {
  const [displayComponent, setDisplayComponent] = useState("Pays")
  const [active, setActive] = useState(true)
  const [activeWealth, setActiveWealth] = useState(false)
  const [activePopulation, setActivePopulation] = useState(false)

  return (
    <main className='m-auto min-h-screen w-1/1 p-4 px-2 max-w-screen-xl'>
      <h1 className='lg:hidden text-center mb-5 text-2xl italic'>
        <Link href='/'>Démographie Mondiale</Link>
      </h1>
      <div className='italic flex lg:flex-row h-screen flex-col w-full'>
        <div className='flex flex-col bg-slate-200 mr-10 px-3 justify-evenly lg:w-1/6 w-full'>
          <h1 className='lg:block text-center mb-5 text-2xl italic hidden'>
            <Link href='/'>Démographie Mondiale</Link>
          </h1>
          <div className='flex lg:flex-col items-center lg:justify-normal justify-between h-5/6 divide-black divide-y divide-slate-200'>
            <button
              onClick={() => {
                setDisplayComponent("Pays")
                setActive(true)
                setActiveWealth(false)
                setActivePopulation(false)
              }}
              className={`${
                active ? "bg-regal-blue" : ""
              } flex items-center justify-center lg:h-auto lg:w-full h-full cursor-pointer p-4 rounded-lg`}
            >
              <span>Pays</span>
            </button>
            <button
              onClick={() => {
                setDisplayComponent("Wealth")
                setActiveWealth(true)
                setActive(false)
                setActivePopulation(false)
              }}
              className={`${
                activeWealth ? "bg-regal-blue" : ""
              } flex items-center justify-center lg:h-auto lg:w-full h-full cursor-pointer p-4 rounded-lg`}
            >
              <span>Fortunes</span>
            </button>
            <button
              onClick={() => {
                setDisplayComponent("Population")
                setActivePopulation(true)
                setActive(false)
                setActiveWealth(false)
              }}
              className={`${
                activePopulation ? "bg-regal-blue" : ""
              } flex items-center justify-center lg:h-auto lg:w-full h-full cursor-pointer p-4 rounded-lg`}
            >
              <span>Population</span>
            </button>
          </div>
        </div>
        <div className='py-1 flex flex-col lg:w-5/6 w-full h-full justify-center items-center'>
          {displayComponent === "Pays" && <Countries />}
          {displayComponent === "Wealth" && <Wealth />}
          {displayComponent === "Population" && <Population />}
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  )
}
