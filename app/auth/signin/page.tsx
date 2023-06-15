import SignInForm from "./form"
import Link from "next/link"

export default function SignIn() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      {/* <div className='mt-10 min-h-400 lg:w-1/3 md:w-2/3  bg-slate-100 p-4'> */}
      <div className='mt-10 min-h-400'>
        <div className='shadow-xl m-auto py-10 bg-white px-8 rounded-xl'>
          <h1 className='font-semibold text-2xl pb-6'>
            Connectez-vous à votre compte
          </h1>
          <SignInForm />
        </div>
        <div className='lg:w-full text-left'>
          <p className='text-sm mt-8'>
            <Link href='/register'>
              Vous n'avez pas de compte?{" "}
              <span className='text-teal-500 font-semibold'>S'inscrire</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
