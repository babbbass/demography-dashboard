import { ReactNode } from "react"

type AlertProps = {
  children: ReactNode
}
export function Alert({ children }: AlertProps) {
  return (
    <div className='border-slate-100 border rounded bg-red-200'>{children}</div>
  )
}
