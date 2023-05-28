import Line from "./population/Line"
import Country from "./population/country"
import MostPopulousCountries from "@/components/population/mostPopulousCountries"
import TotalPopulation from "./population/totalPopulation"

export default function Population() {
  return (
    <div className='w-full flex flex-col h-full'>
      <h1 className='text-regal-blue text-xl text-center my-1 text-base font-bold'>
        Population Mondiale
      </h1>
      <div className='flex flex-col h-full'>
        <div className='flex justify-between mt-5'>
          <TotalPopulation />
        </div>
        <div className='flex justify-center h-3/6'>
          <Line />
        </div>
        <h2 className='text-regal-blue text-lg text-center mt-5 text-base font-bold'>
          Nombre Habitants par pays
        </h2>
        <div className='flex justify-between mt-5'>
          <MostPopulousCountries />
        </div>
        <div className='flex items-center justify-center h-3/6'>
          <Country />
        </div>
      </div>
    </div>
  )
}
