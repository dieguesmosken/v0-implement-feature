import Link from "next/link"

export default function Sobre() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-[#4CAF50] text-xl font-bold">
            BADWOLF3D
          </Link>
          <div className="flex gap-8">
            <Link href="/sobre" className="text-[#4CAF50] hover:text-[#5dc761] underline">
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
        <h1 className="text-4xl font-bold text-[#4CAF50] mb-6">Sobre mim</h1>
        <div className="prose prose-invert prose-headings:text-[#4CAF50] max-w-none">
          <p className="text-lg">
            Olá! Sou Matheus Mosken Diegues, um desenvolvedor apaixonado por transformar ideias em realidade digital.
          </p>
          <p>
            Com experiência em desenvolvimento web e modelagem 3D, estou sempre buscando novos desafios e oportunidades
            para aplicar minhas habilidades e inovação.
          </p>
          <h2>Habilidades</h2>
          <ul>
            <li>Desenvolvimento Web (HTML, CSS, JavaScript, React, Next.js)</li>
            <li>Modelagem 3D e Animação</li>
            <li>Design de Interfaces</li>
            <li>Desenvolvimento de Jogos</li>
          </ul>
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
