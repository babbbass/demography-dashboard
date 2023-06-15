import Wealth from "@/components/wealth"

export default async function Home() {
  return (
    <main>
      <div className='italic flex lg:flex-row h-screen flex-col w-full'>
        <Wealth />
      </div>
    </main>
  )
}
