import RegisterForm from "./form"

export default function RegisterPage() {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-slate-100'>
      <div className='shadow-xl p-4 bg-white rounded-xl w-4/5'>
        <h1 className='font-semibold text-xl pb-6'>Créez votre compte</h1>
        <RegisterForm />
      </div>
    </div>
  )
}
