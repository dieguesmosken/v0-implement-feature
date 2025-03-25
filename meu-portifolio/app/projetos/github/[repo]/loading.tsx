import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-[#4CAF50] text-xl font-bold">BADWOLF3D</div>
          <div className="flex gap-8">
            <div className="text-[#4CAF50]">Sobre mim</div>
            <div className="text-[#4CAF50]">Projetos</div>
          </div>
        </nav>
      </header>

      <section className="flex-1 container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="text-[#4CAF50]">Projetos</div>
          <span className="text-gray-500">/</span>
          <div className="text-[#4CAF50]">GitHub</div>
          <span className="text-gray-500">/</span>
          <div className="text-gray-300">Carregando...</div>
        </div>

        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="h-12 w-12 text-[#4CAF50] animate-spin mb-4" />
          <p className="text-gray-400 text-lg">Carregando detalhes do repositório...</p>
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

