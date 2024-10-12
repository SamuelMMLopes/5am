import { Button } from "./button";
import { Card } from "./card";

export function App() {
  return (
    <main className="h-screen w-screen bg-background text-zinc-100 font-sans flex flex-col gap-12">
      <header className="flex items-center justify-between p-4">
        <strong>5am Clube Coder</strong>
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center justify-center gap-4">
            <a className="text-sm cursor-pointer">Sobre nós</a>
          </div>
          <Button>Entrar</Button>
        </div>
      </header>
      {/** HERO */}
      <div className="w-full p-4 flex items-start justify-between">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-start justify-start gap-8">
            <div className="flex flex-col items-start justify-center gap-1.5">
              <h1 className="text-5xl font-chakra">Cursos de <span className="text-emerald-500">Tecnologia</span></h1>
              <p className="text-sm">Mergulhe em conteúdo com a maior comunidade de tecnologia do país.</p>
            </div>
            <Button>Veja os planos</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Card title="Front-end" description="HTML, CSS, JavaScript, React..." />
            <Card title="Devops" description="AWS, Azure, GCP, IaC, Linux..." />
            <Card title="Mobile" description="React Native, Flutter, IOS, Android..." />
            <Card title="IA" description="Python, Machine Learning, Deep Learning..." />
          </div>
        </div>
        <img src="/hero-bg.webp" className="size-[500px]" alt="" />
      </div>
    </main>
  )
}