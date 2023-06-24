"use client"

import { Alert } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"
import { useState } from "react"

export default function RegisterForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("api/register", {
        method: "POST",
        body: JSON.stringify({
          email,
          name,
          password,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })

      if (res.ok) {
        signIn()
      }
    } catch (error: any) {
      setError(error?.message)
    }
  }
  return (
    <form onSubmit={onSubmit} className='space-y-12 w-full min-w-200'>
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
        <Label className='font-semibold' htmlFor='your-name'>
          Nom
        </Label>
        <Input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          id='your-name'
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
          className='focus:border-teal-500 focus:border-2'
        />
      </div>
      {error && <Alert>{error}</Alert>}
      <div className='w-full'>
        <Button className='bg-teal-500 font-bold text-lg w-full'>
          Créer un compte
        </Button>
      </div>
    </form>
  )
}
