import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, Play, Star, Users, Calendar, Gamepad2 } from "lucide-react"

export default function SurviveTheNight() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0d0d0d]">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link
            href="/"
            className="text-[#bb00ff] text-lg font-bold"
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            Quase Pronto Studios
          </Link>
          <div className="flex gap-8">
            <Link
              href="/sobre"
              className="text-[#4CAF50] hover:text-[#bb00ff] text-sm"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              Sobre mim
            </Link>
            <Link
              href="/projetos"
              className="text-[#4CAF50] hover:text-[#bb00ff] text-sm"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              Projetos
            </Link>
            <Link
              href="/quase-pronto-studios"
              className="text-[#4CAF50] hover:text-[#bb00ff] text-sm"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              QPS
            </Link>
          </div>
        </nav>
      </header>

      <section className="flex-1 container mx-auto px-4 py-12">
        <Link
          href="/quase-pronto-studios"
          className="flex items-center text-[#bb00ff] hover:underline mb-6"
          style={{ fontFamily: "'Press Start 2P', monospace" }}
        >
          <ArrowLeft className="mr-2" size={16} />
          <span className="text-sm">Voltar para QPS</span>
        </Link>

        <div className="max-w-6xl mx-auto">
          {/* Header do Jogo */}
          <div className="text-center mb-12">
            <h1
              className="text-4xl md:text-6xl font-bold text-[#bb00ff] mb-4"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              SURVIVE THE NIGHT
            </h1>
            <p className="text-lg text-white mb-6" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              Os perigos só aparecem quando o sol se põe
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span
                className="bg-[#bb00ff]/20 text-[#bb00ff] px-4 py-2 rounded-md text-sm border border-[#bb00ff]"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                Pixel Art
              </span>
              <span
                className="bg-[#bb00ff]/20 text-[#bb00ff] px-4 py-2 rounded-md text-sm border border-[#bb00ff]"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                Sobrevivência
              </span>
              <span
                className="bg-[#bb00ff]/20 text-[#bb00ff] px-4 py-2 rounded-md text-sm border border-[#bb00ff]"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                Horror
              </span>
              <span
                className="bg-[#bb00ff]/20 text-[#bb00ff] px-4 py-2 rounded-md text-sm border border-[#bb00ff]"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                Indie
              </span>
            </div>
          </div>

          {/* Screenshot Principal */}
          <div className="mb-12">
            <div className="bg-[#1a1a1a] border-2 border-[#bb00ff] rounded-lg p-4">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Survive The Night - Screenshot"
                width={800}
                height={400}
                className="w-full rounded-lg"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </div>

          {/* Informações do Jogo */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Descrição */}
            <div className="lg:col-span-2">
              <div className="bg-[#1a1a1a] border-2 border-[#bb00ff] rounded-lg p-6">
                <h2
                  className="text-2xl font-bold text-[#bb00ff] mb-4"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  📖 Sobre o Jogo
                </h2>
                <div
                  className="space-y-4 text-white text-sm leading-relaxed"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  <p>
                    Em Survive The Night, você deve sobreviver em um mundo onde os perigos só aparecem quando a
                    escuridão toma conta. Durante o dia, colete recursos, construa defesas e prepare-se para o que está
                    por vir.
                  </p>
                  <p>
                    Quando o sol se põe, criaturas sombrias emergem das trevas. Use sua inteligência, recursos limitados
                    e as defesas que construiu para sobreviver até o amanhecer.
                  </p>
                  <p>Cada noite fica mais difícil. Cada dia é uma nova chance de se preparar melhor.</p>
                </div>

                <h3
                  className="text-xl font-bold text-[#bb00ff] mt-8 mb-4"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  🎮 Características
                </h3>
                <ul className="space-y-2 text-white text-sm" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                  <li>• Arte em pixel art detalhada</li>
                  <li>• Sistema de ciclo dia/noite dinâmico</li>
                  <li>• Construção e crafting de defesas</li>
                  <li>• Diferentes tipos de criaturas noturnas</li>
                  <li>• Progressão de dificuldade</li>
                  <li>• Trilha sonora atmosférica</li>
                </ul>
              </div>
            </div>

            {/* Sidebar com informações */}
            <div className="space-y-6">
              {/* Status do Desenvolvimento */}
              <div className="bg-[#1a1a1a] border-2 border-[#bb00ff] rounded-lg p-4">
                <h3
                  className="text-lg font-bold text-[#bb00ff] mb-4"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  🚧 Status
                </h3>
                <div className="space-y-3 text-sm" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                  <div className="flex justify-between">
                    <span className="text-white">Desenvolvimento:</span>
                    <span className="text-[#bb00ff]">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#bb00ff] h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <p className="text-white">Em desenvolvimento ativo</p>
                </div>
              </div>

              {/* Informações Técnicas */}
              <div className="bg-[#1a1a1a] border-2 border-[#bb00ff] rounded-lg p-4">
                <h3
                  className="text-lg font-bold text-[#bb00ff] mb-4"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  💻 Plataformas
                </h3>
                <div className="space-y-2 text-sm text-white" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                  <div className="flex items-center">
                    <Gamepad2 className="mr-2 text-[#bb00ff]" size={16} />
                    <span>PC (Windows)</span>
                  </div>
                  <div className="flex items-center">
                    <Gamepad2 className="mr-2 text-[#bb00ff]" size={16} />
                    <span>PC (Linux)</span>
                  </div>
                  <div className="flex items-center">
                    <Gamepad2 className="mr-2 text-gray-500" size={16} />
                    <span className="text-gray-500">Mobile (Futuro)</span>
                  </div>
                </div>
              </div>

              {/* Estatísticas */}
              <div className="bg-[#1a1a1a] border-2 border-[#bb00ff] rounded-lg p-4">
                <h3
                  className="text-lg font-bold text-[#bb00ff] mb-4"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  📊 Info
                </h3>
                <div className="space-y-3 text-sm" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                  <div className="flex items-center text-white">
                    <Calendar className="mr-2 text-[#bb00ff]" size={16} />
                    <span>Lançamento: 2025</span>
                  </div>
                  <div className="flex items-center text-white">
                    <Users className="mr-2 text-[#bb00ff]" size={16} />
                    <span>1 Jogador</span>
                  </div>
                  <div className="flex items-center text-white">
                    <Star className="mr-2 text-[#bb00ff]" size={16} />
                    <span>Gênero: Sobrevivência</span>
                  </div>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="space-y-3">
                <button
                  className="w-full bg-[#bb00ff] text-black font-bold py-3 px-4 rounded-lg hover:bg-[#9900cc] transition-colors flex items-center justify-center"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                  disabled
                >
                  <Download className="mr-2" size={16} />
                  <span className="text-xs">Em Breve</span>
                </button>

                <button
                  className="w-full border-2 border-[#bb00ff] text-[#bb00ff] font-bold py-3 px-4 rounded-lg hover:bg-[#bb00ff]/10 transition-colors flex items-center justify-center"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                  disabled
                >
                  <Play className="mr-2" size={16} />
                  <span className="text-xs">Demo</span>
                </button>
              </div>
            </div>
          </div>

          {/* Galeria de Screenshots */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold text-[#bb00ff] mb-6"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              📸 Screenshots
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-[#1a1a1a] border-2 border-[#bb00ff]/50 rounded-lg p-2 hover:border-[#bb00ff] transition-colors"
                >
                  <Image
                    src={`/placeholder.svg?height=200&width=300&text=Screenshot${i}`}
                    alt={`Screenshot ${i}`}
                    width={300}
                    height={200}
                    className="w-full rounded"
                    style={{ imageRendering: "pixelated" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Devlog */}
          <div className="bg-[#1a1a1a] border-2 border-[#bb00ff] rounded-lg p-6">
            <h2
              className="text-2xl font-bold text-[#bb00ff] mb-6"
              style={{ fontFamily: "'Press Start 2P', monospace" }}
            >
              📝 Devlog
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#bb00ff] pl-4">
                <h3
                  className="text-lg font-bold text-[#bb00ff] mb-2"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  Update #3 - Sistema de Construção
                </h3>
                <p className="text-sm text-gray-400 mb-2" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                  15 de Janeiro, 2025
                </p>
                <p className="text-white text-sm leading-relaxed" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                  Implementamos o sistema básico de construção! Agora os jogadores podem construir barricadas,
                  armadilhas e torres de defesa durante o dia para se proteger durante a noite.
                </p>
              </div>

              <div className="border-l-4 border-[#bb00ff] pl-4">
                <h3
                  className="text-lg font-bold text-[#bb00ff] mb-2"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  Update #2 - Criaturas Noturnas
                </h3>
                <p className="text-sm text-gray-400 mb-2" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                  28 de Dezembro, 2024
                </p>
                <p className="text-white text-sm leading-relaxed" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                  Adicionamos 5 tipos diferentes de criaturas que aparecem durante a noite. Cada uma tem comportamentos
                  únicos e requer estratégias diferentes para sobreviver.
                </p>
              </div>

              <div className="border-l-4 border-[#bb00ff] pl-4">
                <h3
                  className="text-lg font-bold text-[#bb00ff] mb-2"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                >
                  Update #1 - Ciclo Dia/Noite
                </h3>
                <p className="text-sm text-gray-400 mb-2" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                  10 de Dezembro, 2024
                </p>
                <p className="text-white text-sm leading-relaxed" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                  O sistema básico de ciclo dia/noite está funcionando! Durante o dia você pode explorar e coletar
                  recursos. À noite... bem, é melhor se esconder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-4 text-gray-500 text-xs" style={{ fontFamily: "'Press Start 2P', monospace" }}>
        &copy; 2025 Quase Pronto Studios. Todos os direitos reservados.
      </footer>
    </main>
  )
}
