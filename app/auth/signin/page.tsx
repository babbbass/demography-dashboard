import SignInForm from "./form"
import Link from "next/link"

export default function SignIn() {
  return (
    <div className='w-full mt-10 flex flex-col h-screen items-center'>
      <div className='min-h-400'>
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
