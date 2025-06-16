import Image from "next/image"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Home() {
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
            <Link href="/quase-pronto-studios" className="text-[#4CAF50] hover:text-[#5dc761]">
              Quase Pronto Studios
            </Link>
          </div>
        </nav>
      </header>

      <section className="flex-1 container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4CAF50] mb-6">
              Transforme suas ideias em realidade! <span className="block mt-2">Com habilidade e inovação</span>
            </h1>

            <div className="mt-12">
              <h2 className="text-[#4CAF50] text-xl mb-4">Acesse minhas redes</h2>

              <div className="flex flex-col gap-4">
                <Link
                  href="https://github.com/dieguesmosken"
                  target="_blank"
                  className="flex items-center gap-2 text-[#4CAF50] border border-[#4CAF50] rounded-md px-6 py-3 hover:bg-[#4CAF50]/10 hover:translate-y-[-2px] hover:shadow-md hover:shadow-[#4CAF50]/20 transition-all duration-300 ease-in-out group"
                >
                  <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Github</span>
                </Link>

                <Link
                  href="https://linkedin.com/in/dieguesmosken"
                  target="_blank"
                  className="flex items-center gap-2 text-[#4CAF50] border border-[#4CAF50] rounded-md px-6 py-3 hover:bg-[#4CAF50]/10 hover:translate-y-[-2px] hover:shadow-md hover:shadow-[#4CAF50]/20 transition-all duration-300 ease-in-out group"
                >
                  <Linkedin size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full bg-[#4CAF50] flex items-center justify-center">
            <Image
              src="https://avatars.githubusercontent.com/u/69434680"
              alt="Foto de perfil"
              width={350}
              height={350}
              className="rounded-full object-cover"
              priority
            />
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
