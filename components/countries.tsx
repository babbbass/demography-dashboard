"use client"
import { Bar } from "./countries/Bar"
import { Doughnuts } from "@/components/countries/Doughnuts"

export default function Countries() {
  return (
    <>
      <h2 className='text-center font-bold text-xl mb-2'>
        10 pays les + riches
      </h2>
      <p className='text-center'>PIB en Billions dollars US</p>
      <div className='flex items-center justify-center h-1/2 w-full'>
        <Bar />
      </div>
      <div className='my-6 w-full'>
        <h2 className='text-center font-bold text-xl mb-2'>
          Répartition PIB mondiale
        </h2>
        <p className='text-center'>en %</p>
        <div className='flex justify-evenly w-full'>
          <Doughnuts />
        </div>
      </div>
    </>
  )
}
