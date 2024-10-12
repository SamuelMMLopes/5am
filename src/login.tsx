import { Button } from "./button"

export function Login() {
  return (
    <main className="h-screen min-w-screen bg-zinc-900 text-zinc-100 font-sans flex items-center justify-center flex-col overflow-x-hidden gap-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <strong className="font-chakra text-2xl"><span className="text-emerald-500">5am</span> Clube Coder</strong>
        <p className="text-gray-300 text-xs">Entre e descubra os benefícios de estudar às 5am.</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-start gap-2">
          <span className="text-gray-300 text-sm">E-mail</span>
          <div className="border border-gray-700 rounded-md px-4 py-2 w-[500px]">
            <input type="email" className="bg-transparent outline-none text-sm" />
          </div>
        </div>

        <Button className="w-full" onClick={() => {
          alert("Usuário não encontrado")
        }}>Entrar</Button>
      </div>
    </main>
  )
}