import {
  PopulationTotal_2023,
  PopulationTotal_2022,
  PopulationTotal_2021,
} from "@/utils/datas/population"

export default function TotalPopulation() {
  return (
    <>
      <div className='rounded-lg flex flex-col items-center justify-center bg-white p-2 w-2/8'>
        <span className='font-bold'>2023</span>
        <span className='text-regal-blue text-sm italic mt-2'>
          {PopulationTotal_2023} Milliards
        </span>
      </div>
      <div className='rounded-lg flex flex-col items-center justify-center bg-white p-2 w-2/8'>
        <span className='font-bold'>2022 </span>
        <span className='text-regal-blue text-sm italic mt-2'>
          {PopulationTotal_2022} Milliards
        </span>
      </div>
      <div className='rounded-lg flex flex-col items-center justify-center bg-white p-2 w-2/8'>
        <span className='font-bold'>2021 </span>
        <span className='text-regal-blue text-sm italic mt-2'>
          {PopulationTotal_2021} Milliards
        </span>
      </div>
    </>
  )
}
