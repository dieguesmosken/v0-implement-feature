import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, LinkIcon, Copy, ExternalLink } from "lucide-react"

export default function EncurtadorDeLinks() {
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
            <Link href="/projetos" className="text-[#4CAF50] hover:text-[#5dc761]">
              Projetos
            </Link>
          </div>
        </nav>
      </header>

      <section className="flex-1 container mx-auto px-4 py-12">
        <Link href="/projetos" className="flex items-center text-[#4CAF50] hover:underline mb-6">
          <ArrowLeft className="mr-2" size={20} />
          Voltar para projetos
        </Link>

        <h1 className="text-4xl font-bold text-[#4CAF50] mb-6">Encurtador de Links</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="rounded-lg overflow-hidden border border-[#4CAF50]/30 mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%2C%2019_46_22%20GMT-3-tk3icvn6cD8GtsGmSTxSbzKBDBycNB.png"
                alt="Encurtador de Links"
                width={800}
                height={500}
                className="w-full"
              />
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/dieguesmosken/encurtador-links"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#4CAF50] border border-[#4CAF50] rounded-md px-4 py-2 hover:bg-[#4CAF50]/10 transition-colors"
              >
                <ExternalLink size={18} />
                Ver código
              </a>
              <a
                href="https://encurtador.dieguesmosken.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#4CAF50] border border-[#4CAF50] rounded-md px-4 py-2 hover:bg-[#4CAF50]/10 transition-colors"
              >
                <ExternalLink size={18} />
                Ver demo
              </a>
            </div>
          </div>

          <div className="prose prose-invert prose-headings:text-[#4CAF50] max-w-none">
            <h2>Sobre o projeto</h2>
            <p>
              O Encurtador de Links é uma aplicação web que permite aos usuários encurtar URLs longas, facilitando o
              compartilhamento em redes sociais, mensagens e e-mails.
            </p>

            <h2>Funcionalidades</h2>
            <ul>
              <li>Encurtamento de URLs longas</li>
              <li>Cópia do link encurtado com um clique</li>
              <li>Interface simples e intuitiva</li>
              <li>Design responsivo para dispositivos móveis</li>
            </ul>

            <h2>Tecnologias utilizadas</h2>
            <ul>
              <li>React.js para a interface do usuário</li>
              <li>Node.js e Express para o backend</li>
              <li>MongoDB para armazenamento de dados</li>
              <li>Tailwind CSS para estilização</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#4CAF50]/30 pt-8">
          <h2 className="text-2xl font-bold text-[#4CAF50] mb-4">Como funciona</h2>

          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#4CAF50]/30">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center text-amber-400 text-2xl font-bold">
                <LinkIcon className="mr-2" size={24} />
                Encurtador de Links
              </div>

              <div className="w-full max-w-xl mt-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Coloque sua URL aqui"
                    className="flex-1 px-4 py-2 rounded-md border border-gray-700 bg-[#222] text-white"
                    readOnly
                  />
                  <button className="bg-amber-400 text-black font-medium px-4 py-2 rounded-md hover:bg-amber-500 transition-colors">
                    Encurtar
                  </button>
                  <button className="bg-amber-400 text-black font-medium px-4 py-2 rounded-md hover:bg-amber-500 transition-colors flex items-center justify-center">
                    <Copy size={18} className="mr-1" />
                    Copiar
                  </button>
                </div>
              </div>

              <div className="mt-4 text-gray-400 text-sm">Desenvolvido por DevLover</div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-[#4CAF50] mb-2">Processo de desenvolvimento</h3>
            <p className="text-gray-300">
              Este projeto foi desenvolvido como uma solução para o problema de compartilhamento de URLs longas. O
              processo incluiu pesquisa de UX, design de interface, implementação do frontend e backend, e testes de
              usabilidade para garantir uma experiência fluida para os usuários.
            </p>
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

