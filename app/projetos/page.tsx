import Link from "next/link"
import Image from "next/image"
import { Github } from "lucide-react"

export default function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: "Encurtador de Links",
      descricao: "Aplicação web para encurtar URLs longas, facilitando o compartilhamento de links.",
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%2C%2019_46_22%20GMT-3-tk3icvn6cD8GtsGmSTxSbzKBDBycNB.png",
      slug: "encurtador-de-links",
    },
    {
      id: 2,
      titulo: "Previsão do Tempo",
      descricao: "Aplicação web para consulta de previsão do tempo em diferentes cidades.",
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-03-20%20212842-8ErnfzIaALNajOs5vY5ckvQFP3QDrv.png",
      slug: "previsao-do-tempo",
    },
    {
      id: 3,
      titulo: "Projeto 3D",
      descricao: "Modelagem e animação 3D para um projeto de visualização arquitetônica.",
      imagem: "/placeholder.svg?height=200&width=300",
      slug: "projeto-3d",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-[#4CAF50] text-xl font-bold">
            BADWOLF3D
          </Link>
          <div className="flex gap-8">
            <Link href="/sobre" className="text-[#4CAF50] hover:text-[#5dc761]">
              Sobre mim
            </Link>
            <Link href="/projetos" className="text-[#4CAF50] hover:text-[#5dc761] underline">
              Projetos
            </Link>
            <Link href="/quase-pronto-studios" className="text-[#4CAF50] hover:text-[#5dc761]">
              Quase Pronto Studios
            </Link>
          </div>
        </nav>
      </header>

      <section className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#4CAF50] mb-6">Projetos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="border border-[#4CAF50]/30 rounded-lg overflow-hidden hover:border-[#4CAF50] hover:shadow-lg hover:shadow-[#4CAF50]/20 hover:translate-y-[-3px] transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={projeto.imagem || "/placeholder.svg"}
                  alt={projeto.titulo}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-[#4CAF50] mb-2">{projeto.titulo}</h2>
                <p className="text-gray-300">{projeto.descricao}</p>
                <Link href={`/projetos/${projeto.slug}`} className="inline-block mt-4 text-[#4CAF50] hover:underline">
                  Ver detalhes
                </Link>
              </div>
            </div>
          ))}

          {/* GitHub Projects Card */}
          <div className="border border-[#4CAF50]/30 rounded-lg overflow-hidden hover:border-[#4CAF50] hover:shadow-lg hover:shadow-[#4CAF50]/20 hover:translate-y-[-3px] transition-all duration-300">
            <div className="h-48 bg-[#1a1a1a] flex items-center justify-center">
              <Github size={80} className="text-[#4CAF50] group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-[#4CAF50] mb-2">Mais Projetos no GitHub</h2>
              <p className="text-gray-300">Explore todos os meus projetos de código aberto disponíveis no GitHub.</p>
              <Link href="/projetos/github" className="inline-block mt-4 text-[#4CAF50] hover:underline">
                Ver repositórios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#4CAF50] py-6 text-center text-black">
        <div className="container mx-auto px-4">
          <p>Desenvolvido por @dieguesmosken.</p>
          <p>55730362 MATHEUS MOSKEN DIEGUES</p>
          <p>CNPJ: 55.730.362/0001-20</p>
          <p>Todos os direitos reservados © 2025</p>
        </div>
      </footer>
    </main>
  )
}
