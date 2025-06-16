import Link from "next/link"
import Image from "next/image"

export default function QuaseProntoStudios() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0d0d0d]">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-[#bb00ff] mt-4"
            style={{ fontFamily: "'Press Start 2P', monospace" }}>
            
            Quase Pronto Studios
          
          </Link>
          <div className="flex gap-8">
            <Link href="/sobre" className="text-[#4CAF50] hover:text-[#bb00ff]" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              Sobre mim
            </Link>
            <Link href="/projetos" className="text-[#4CAF50] hover:text-[#bb00ff]" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              Projetos
            </Link>
          </div>
        </nav>
      </header>

      <div className="flex-1">
        <header className="text-center py-8">
          <div className="mb-4">
            <Image
              src="/logo_quase-pronto-studios.png"
              alt="Logo Quase Pronto Studios"
              width={300}
              height={200}
              className="mx-auto pixelated"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
          
        </header>

        <main className="max-w-4xl mx-auto my-8 p-4 bg-[#1a1a1a] border-2 border-[#bb00ff] rounded-lg">
          <section className="mb-8">
            <h2 className="text-[#bb00ff] text-lg mb-4" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              🧾 Sobre Nós
            </h2>
            <p className="leading-relaxed text-sm text-white" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              Quase Pronto Studios é um estúdio indie brasileiro fundado por Matheus Mösken Diegues. Criamos jogos com
              visuais em pixel art e um toque neon roxo, com foco em experiências criativas para PC e mobile. Nós amamos
              ideias malucas que viram jogos quase prontos, mas sempre jogáveis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[#bb00ff] text-lg mb-4" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              🎮 Jogos
            </h2>
            <p className="leading-relaxed text-sm text-white" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              <strong>
                <Link href="/quase-pronto-studios/survive-the-night" className="text-[#bb00ff] hover:underline">
                  Survive The Night
                </Link>
              </strong>
              : Um jogo de sobrevivência em pixel art onde os perigos só aparecem quando o sol se põe. Em breve no{" "}
              <a href="#" className="text-[#bb00ff] hover:underline">
                itch.io
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-[#bb00ff] text-lg mb-4" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              📲 Redes e Contato
            </h2>
            <div className="leading-relaxed text-sm text-white" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              <p className="mb-2">Twitter, Instagram, Itch.io e Discord!</p>
              <p className="mb-2">
                Nos siga:{" "}
                <a href="#" className="text-[#bb00ff] hover:underline">
                  @quaseprontostudios
                </a>
              </p>
              <p>
                E-mail:{" "}
                <a href="mailto:qpsgamedev@badwolf3d.com.br" className="text-[#bb00ff] hover:underline">
                  qpsgamedev@badwolf3d.com.br
                </a>
              </p>
            </div>
          </section>
        </main>
      </div>

      <footer className="text-center py-4 text-gray-500 text-xs" style={{ fontFamily: "'Press Start 2P', monospace" }}>
        &copy; 2025 Quase Pronto Studios. Todos os direitos reservados.
      </footer>
    </main>
  )
}
