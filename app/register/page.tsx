import Link from "next/link"
import RegisterForm from "./form"

export default function RegisterPage() {
  return (
    <div className='w-full flex flex-col items-center h-screen'>
      <div className='mt-10 min-h-400 lg:w-1/3 md:w-2/3'>
        <div className='shadow-xl m-auto py-10 bg-white px-8 rounded-xl'>
          <h1 className='font-semibold text-2xl pb-6'>Créez votre compte</h1>
          <RegisterForm />
        </div>
        <div className='lg:w-full text-left'>
          <p className='text-sm mt-8'>
            <Link href='/auth/signin'>
              Vous avez un compte?{" "}
              <span className='text-teal-500 font-semibold'>Connexion</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
