import { ComponentProps } from "react";

export function Button(props: ComponentProps<'button'>) {
  return <button {...props} className="bg-emerald-500 px-4 h-10 rounded-md text-sm hover:opacity-60 cursor-pointer transition-colors" />
}