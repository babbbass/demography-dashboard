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
      <h1 className='text-center mb-5 text-2xl italic'>
        <Link href='/'>Démographie Mondiale</Link>
      </h1>
      <div className='italic flex lg:flex-row h-screen flex-col'>
        <div className='flex flex-col bg-slate-200 mr-10 px-3 justify-evenly lg:w-1/6 w-full'>
          <div className='flex lg:flex-col items-center justify-between h-5/6 divide-black divide-y divide-slate-200'>
            <button
              onClick={() => {
                setDisplayComponent("Pays")
                setActive(true)
                setActiveWealth(false)
                setActivePopulation(false)
              }}
              className={`${
                active ? "bg-regal-blue" : ""
              } flex items-center lg:after:content-[">"] h-full cursor-pointer p-4 rounded-lg`}
            >
              <span className='lg:mr-8'>Pays</span>
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
              } flex items-center lg:after:content-[">"] h-1/3 cursor-pointer p-4 rounded-lg`}
            >
              <span className='lg:mr-2'>Fortunes</span>
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
              } flex items-center lg:after:content-[">"] h-1/3 cursor-pointer p-4 rounded-lg`}
            >
              <span className='lg:mr-8'>Population</span>
            </button>
          </div>
        </div>
        <div className='py-1 flex flex-col lg:w-2/3 w-full h-full justify-center items-center'>
          {displayComponent === "Pays" && <Countries />}
          {displayComponent === "Wealth" && <Wealth />}
          {displayComponent === "Population" && <Population />}
        </div>
      </div>
      <Footer />
    </main>
  )
}
