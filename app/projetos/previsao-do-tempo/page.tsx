import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Cloud, ExternalLink, Home, Linkedin, Search } from "lucide-react"

export default function PrevisaoDoTempo() {
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

        <h1 className="text-4xl font-bold text-[#4CAF50] mb-6">Previsão do Tempo</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="rounded-lg overflow-hidden border border-[#4CAF50]/30 mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-03-20%20212842-8ErnfzIaALNajOs5vY5ckvQFP3QDrv.png"
                alt="Previsão do Tempo"
                width={800}
                height={500}
                className="w-full"
              />
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/dieguesmosken/WeatherApp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#4CAF50] border border-[#4CAF50] rounded-md px-4 py-2 hover:bg-[#4CAF50]/10 transition-colors"
              >
                <ExternalLink size={18} />
                Ver código
              </a>
              <a
                href="https://www.teuzin.com.br/WeatherApp/"
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
              A aplicação de Previsão do Tempo permite aos usuários consultar informações meteorológicas atualizadas
              para diferentes cidades. Com uma interface intuitiva, os usuários podem rapidamente verificar temperatura,
              umidade, pressão atmosférica e outros dados relevantes.
            </p>

            <h2>Funcionalidades</h2>
            <ul>
              <li>Busca de previsão do tempo por cidade</li>
              <li>Exibição de dados meteorológicos detalhados</li>
              <li>Informações sobre temperatura, umidade, pressão e vento</li>
              <li>Horários de nascer e pôr do sol</li>
              <li>Interface responsiva para todos os dispositivos</li>
            </ul>

            <h2>Tecnologias utilizadas</h2>
            <ul>
              <li>React.js para a interface do usuário</li>
              <li>API OpenWeatherMap para dados meteorológicos</li>
              <li>Bootstrap para estilização</li>
              <li>Axios para requisições HTTP</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#4CAF50]/30 pt-8">
          <h2 className="text-2xl font-bold text-[#4CAF50] mb-4">Demonstração</h2>

          <div className="bg-[#0078ff] p-6 rounded-lg">
            <div className="bg-white rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-black text-xl font-bold">Previsão do Tempo</h3>
                <div className="flex gap-4">
                  <div className="flex items-center text-black">
                    <Home size={18} className="mr-1" />
                    <span>Página Inicial</span>
                  </div>
                  <div className="flex items-center text-black">
                    <Linkedin size={18} className="mr-1" />
                    <span>LinkedIn</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Digite uma cidade"
                  className="flex-1 px-4 py-2 rounded-md border border-gray-300 text-black"
                  defaultValue="registro"
                  readOnly
                />
                <button className="bg-[#0078ff] text-white font-medium px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center">
                  <Search size={18} className="mr-1" />
                  Pesquisar
                </button>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Cloud className="text-gray-600 mr-2" size={24} />
                  <h4 className="text-black text-lg font-semibold">algumas nuvens</h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-blue-600 font-medium">
                      Cidade: <span className="text-black">Registro</span>
                    </p>
                    <p className="text-blue-600 font-medium">
                      Temperatura: <span className="text-black">22.43°C</span>
                    </p>
                    <p className="text-blue-600 font-medium">
                      Tempo: <span className="text-black">algumas nuvens</span>
                    </p>
                    <p className="text-blue-600 font-medium">
                      Umidade: <span className="text-black">87%</span>
                    </p>
                    <p className="text-blue-600 font-medium">
                      Pressão: <span className="text-black">1019 hPa</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-blue-600 font-medium">
                      Velocidade do Vento: <span className="text-black">0.61 m/s</span>
                    </p>
                    <p className="text-blue-600 font-medium">
                      Direção do Vento: <span className="text-black">164°</span>
                    </p>
                    <p className="text-blue-600 font-medium">
                      Nascer do Sol: <span className="text-black">06:15:03</span>
                    </p>
                    <p className="text-blue-600 font-medium">
                      Pôr do Sol: <span className="text-black">18:22:29</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-[#4CAF50] mb-2">Processo de desenvolvimento</h3>
            <p className="text-gray-300">
              Este projeto foi desenvolvido para fornecer informações meteorológicas precisas e atualizadas. O processo
              incluiu a integração com a API OpenWeatherMap, design de interface amigável, e implementação de
              funcionalidades de busca e exibição de dados meteorológicos detalhados.
            </p>
            <p className="text-gray-300 mt-2">
              Um dos desafios foi apresentar uma grande quantidade de dados técnicos de forma clara e compreensível para
              usuários comuns, o que foi resolvido com um layout organizado e uso de ícones intuitivos.
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
