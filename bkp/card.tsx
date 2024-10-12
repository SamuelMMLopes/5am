export function Card({ title, description }: any) {
  return (
    <div className="flex flex-col border border-emerald-200 hover:border-emerald-500 p-8 px-4 items-start justify-center rounded-md min-w-12 bg-card">
      <span className="font-semibold">{title}</span>
      <p className="text-sm">{description}</p>
    </div>
  )
}