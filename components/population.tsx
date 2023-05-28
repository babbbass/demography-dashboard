import Line from "./population/Line"
import MostPopulousCountries from "@/components/population/mostPopulousCountries"
import TotalPopulation from "./population/totalPopulation"

export default function Population() {
  return (
    <div className='w-full flex flex-col h-full'>
      <h1 className='text-center my-5 text-base font-bold'>
        Population en Milliards
      </h1>
      <div className='flex flex-col h-full'>
        <div className='flex justify-evenly h-1/10 mt-10'>
          <TotalPopulation />
        </div>
        <div className='flex items-center justify-center h-7/10'>
          <Line />
        </div>
        <div className='flex justify-evenly h-1/10 mt-10'>
          <MostPopulousCountries />
        </div>
      </div>
    </div>
  )
}
