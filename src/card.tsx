const colors = {
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  cyan: 'bg-cyan-500',
  yellow: 'bg-yellow-500'
} as const

type Props = {
  title: string
  description: string
  logo: any
  color: keyof typeof colors
}

export function Card({ title, description, logo, color }: Props) {
  return (
    <div className="flex h-[120px] rounded-md w-full bg-zinc-800 gap-4 hover:scale-105 transition-all duration-300">
      <div className={`${colors[color]} h-full w-1 rounded-md`}></div>
      <div className="flex gap-4 items-center">
        {logo}
        <div className="h-[calc(100%_-_20px)] w-0.5 bg-zinc-700" />
        <div className="flex flex-col gap-2">
          <span className="inline-flex flex-wrap items-center gap-3 text-gray-100 text-lg font-bold">{title}</span>
          <p className="text-xs text-gray-300 text-start line-clamp-3">{description}</p>
        </div>
      </div>
    </div>
  )
}