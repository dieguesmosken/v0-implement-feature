import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
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
        <Link href="/projetos/github" className="flex items-center text-[#4CAF50] hover:underline mb-6">
          <ArrowLeft className="mr-2" size={20} />
          Voltar para GitHub
        </Link>

        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-4xl font-bold text-[#4CAF50] mb-4">Repositório não encontrado</h1>
          <p className="text-gray-400 text-lg mb-8">
            O repositório que você está procurando não existe ou não está disponível.
          </p>
          <Link
            href="/projetos/github"
            className="flex items-center gap-2 text-[#4CAF50] border border-[#4CAF50] rounded-md px-4 py-2 hover:bg-[#4CAF50]/10 transition-colors"
          >
            <ArrowLeft size={18} />
            Ver todos os repositórios
          </Link>
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

