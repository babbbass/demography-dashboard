import { prisma } from "@/lib/prisma"
import { hash } from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json()
    const hashed = await hash(password, 12)

    const user = await prisma.user.create({
      data: { email, name, password: hashed },
    })

    return NextResponse.json({
      user: user.email,
    })
  } catch (err: any) {
    return new NextResponse(
      JSON.stringify({
        error: err.message,
      }),
      {
        status: 500,
      }
    )
  }
}
