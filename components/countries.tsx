"use client"
import { Bar } from "./countries/Bar"
import { Doughnuts } from "@/components/countries/Doughnuts"

export default function Countries() {
  return (
    <>
      <div className='flex items-center justify-center h-1/2 w-full'>
        <Bar />
      </div>
      <div className='flex justify-evenly h-1/2 w-full'>
        <Doughnuts />
      </div>
    </>
  )
}
