"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { signIn } from "next-auth/react"

export default function SignInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    })
    console.log(result)
  }
  return (
    <>
      <form onSubmit={onSubmit} className='mb-10 space-y-12'>
        <div className='grid w-full max-w-sm items-center gap-1.5 '>
          <Label className='font-semibold' htmlFor='email'>
            E-mail
          </Label>
          <Input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            id='email'
            className='focus:border-teal-300 focus:border-2'
          />
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className='font-semibold' htmlFor='password'>
            Mot de passe
          </Label>
          <Input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            id='password'
            className='focus:border-teal-300 focus:border-2'
          />
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Button className='bg-teal-500 font-bold text-lg'>Continuer</Button>
        </div>
      </form>
    </>
  )
}
