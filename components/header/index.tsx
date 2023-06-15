"use client"
import MainNavMenu from "@/components/navigation/menu"
import { LoginButton, LogoutButton } from "@/app/auth"
import { Session } from "next-auth"
import { usePathname } from "next/navigation"

type Header = {
  session: Session | null
}
export default function Header({ session }: Header) {
  const pathName = usePathname()
  return (
    <>
      {pathName == "/register" || pathName == "/auth/signin" ? (
        ""
      ) : (
        <div>
          <div className='flex justify-around items-center'>
            {session ? `Bienvenue ${session?.user?.name}` : <LoginButton />}
            {session && <LogoutButton />}
          </div>
          <div className='my-8'>
            <MainNavMenu />
          </div>
        </div>
      )}
    </>
  )
}
