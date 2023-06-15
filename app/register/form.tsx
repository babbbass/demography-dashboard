"use client"

import { Alert } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"
import { headers } from "next/dist/client/components/headers"
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
    <form onSubmit={onSubmit} className='space-y-12 w-full'>
      <div className='grid w-full max-w-sm items-center gap-1.5 '>
        <Label htmlFor='email'>E-mail</Label>
        <Input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          id='email'
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label htmlFor='your-name'>Nom</Label>
        <Input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          id='your-name'
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label htmlFor='password'>Mot de passe</Label>
        <Input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          id='password'
        />
      </div>
      {error && <Alert>{error}</Alert>}
      <div className='w-full'>
        <Button className='w-full'>Créer un compte</Button>
      </div>
    </form>
  )
}
