"use client"
import { Button } from "@/components/ui/button"

import { signIn, signOut } from "next-auth/react"

export const LoginButton = () => {
  return <Button onClick={() => signIn()}>Connexion</Button>
}

export const LogoutButton = () => {
  return (
    <Button variant='secondary' onClick={() => signOut()}>
      Deconnexion
    </Button>
  )
}
