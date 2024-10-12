import { BiSupport } from "react-icons/bi";
import { DiCss3, DiHtml5, DiNodejsSmall, DiReact } from "react-icons/di";
import { PiNetworkLight } from "react-icons/pi";
import { RiExchange2Line } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";
import { Card } from "./card";


export function App() {
  const navigate = useNavigate();

  return (
    <main className="h-full max-w-screen bg-zinc-900 text-zinc-100 font-sans flex flex-col gap-12 overflow-x-hidden">
      {/** HEADER */}
      <header className="flex items-center justify-between p-4 bg-zinc-800">
        <strong className="font-chakra text-2xl"><span className="text-emerald-500">5am</span> Clube Coder</strong>
        <div className="flex items-center justify-center gap-8">
          <Button onClick={() => navigate('/login')}>Entrar</Button>
        </div>
      </header>

      <div className="h-full self-center flex flex-col items-start justify-center gap-16 p-4 w-[1024px]">
        <div className="border rounded-md border-gray-700 px-8 py-6 bg-center bg-cover bg-no-repeat bg-[url(/hero-bg.webp)] w-full flex flex-col items-start justify-center gap-2">
          <h3 className="text-gray-100 font-bold">Comece sua jornada aqui!</h3>
          <p className="text-gray-200 text-sm">Avance em seus estudos com o nosso método inovador de ensino. Às 5AM você terá mais foco e menos distrações!</p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h3 className="text-gray-100 text-sm font-bold">O que te espera</h3>
            <p className="text-gray-300 text-xs">Descubra os conteúdos ensinado</p>
          </div>
          <div className="flex-col flex gap-8">
            <Card
              title="NodeJS"
              description="Node.js é rápido, escalável e usa JavaScript no back-end, facilitando o desenvolvimento. Ideal para aplicativos em tempo real, tem vasta comunidade e recursos disponíveis."
              color="red"
              logo={<DiNodejsSmall className="size-16" />}
            />

            <Card
              title="HTML"
              description="HTML é a base da web, usada para estruturar o conteúdo de páginas. Ele define elementos como textos, imagens e links, sendo essencial para a criação de sites e aplicações web."
              color="blue"
              logo={<DiHtml5 className="size-16" />}
            />

            <Card
              title="CSS"
              description="CSS é usado para estilizar páginas web, controlando layout, cores, fontes e espaçamento. Ele permite criar designs visuais atraentes e responsivos, melhorando a experiência do usuário."
              color="yellow"
              logo={<DiCss3 className="size-16" />}
            />

            <Card
              title="React"
              description="React é uma biblioteca JavaScript usada para criar interfaces de usuário dinâmicas e interativas. Ele facilita a construção de componentes reutilizáveis e melhora a performance de aplicações web."
              color="cyan"
              logo={<DiReact className="size-16" />}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-gray-100 text-sm font-bold">Sobre nós</h3>
          <p className="text-gray-300 text-xs text-justify">
            Na <span className="text-emerald-500 font-semibold">5am Clube Coder</span>, acreditamos no poder transformador de uma rotina disciplinada. Nossa metodologia incentiva os alunos a acordarem às 5 da manhã para estudar, aproveitando as horas mais tranquilas do dia para focar no aprendizado com maior concentração e produtividade. Ao começar o dia cedo, os alunos conseguem absorver melhor os conteúdos, ganham disciplina e organização, além de desfrutarem da sensação de ter cumprido uma meta antes mesmo do mundo despertar. Estamos comprometidos em criar hábitos saudáveis que levam a resultados extraordinários no desenvolvimento pessoal e profissional de nossos alunos.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h3 className="text-gray-100 text-sm font-bold">Nossa comunidade</h3>
            <p className="text-gray-300 text-xs">A maior comunidade de tecnologia</p>
          </div>
          <div className="flex-col flex gap-8">
            <Card
              title="Troca de Conhecimento e Experiências"
              description="A comunidade proporciona um espaço para que os participantes compartilhem dúvidas, insights e soluções de problemas. Isso permite aprender com as experiências dos outros, evitando erros comuns e descobrindo novas abordagens para os desafios da programação."
              color="red"
              logo={<RiExchange2Line className="size-16" />}
            />

            <Card
              title="Suporte e Motivação Mútua"
              description="Em um curso online, é comum que os estudantes enfrentem desafios isoladamente. No entanto, com uma comunidade ativa, você tem acesso a um grupo de apoio que pode ajudar a manter a motivação em alta. Ver o progresso dos outros também pode ser uma fonte de inspiração para continuar estudando."
              color="blue"
              logo={<BiSupport className="size-16" />}
            />

            <Card
              title="Networking e Oportunidades Profissionais"
              description="Fazer parte de uma comunidade também abre portas para networking. Você estará em contato com outros programadores e entusiastas da área, o que pode levar a oportunidades de colaboração, indicações para vagas de emprego e até mesmo parcerias para projetos."
              color="yellow"
              logo={<PiNetworkLight className="size-16" />}
            />

            <Card
              title="Feedback Constante"
              description="Ao participar de discussões e compartilhar seu código com a comunidade, você pode receber feedback construtivo de outros programadores, o que é essencial para melhorar suas habilidades. Esse tipo de revisão de código pode ajudar a detectar erros que você não havia percebido ou sugerir maneiras mais eficientes de realizar uma tarefa."
              color="cyan"
              logo={<VscFeedback className="size-16" />}
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 items-start justify-start">
          <div className="flex flex-col gap-1">
            <h3 className="text-gray-100 text-sm font-bold">Quero participar</h3>
            <p className="text-gray-300 text-xs">Deixe seu email que entraremos em contato</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="border border-gray-700 rounded-md px-4 py-2 w-[500px]">
              <input type="email" className="bg-transparent outline-none text-sm" />
            </div>
            <Button onClick={() => {
              alert("Obrigado por deixar seu e-mail. Entraremos em contato o mais breve possível!")
            }}>Participar</Button>
          </div>
        </div>
      </div>
    </main>
  )
}