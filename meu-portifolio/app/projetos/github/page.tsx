import Link from "next/link"
import { ArrowLeft, Star, GitFork, Calendar } from "lucide-react"

async function getGithubRepos() {
  try {
    // Use server-side fetch to avoid exposing API keys
    const response = await fetch("https://api.github.com/users/dieguesmosken/repos?sort=updated&per_page=100", {
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`)
    }

    const repos = await response.json()

    // Filter out forked repositories and sort by stars
    return repos.filter((repo: any) => !repo.fork).sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error)
    return []
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

export default async function GitHubProjects() {
  const repos = await getGithubRepos()

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

        <h1 className="text-4xl font-bold text-[#4CAF50] mb-6">Meus Projetos no GitHub</h1>

        <div className="grid grid-cols-1 gap-4">
          {repos.length > 0 ? (
            repos.map((repo: any) => (
              <div
                key={repo.id}
                className="border border-[#4CAF50]/30 rounded-lg p-6 hover:border-[#4CAF50] hover:shadow-md hover:shadow-[#4CAF50]/20 hover:translate-y-[-2px] transition-all duration-300"
              >
                <h2 className="text-xl font-bold text-[#4CAF50] mb-2">
                  <Link href={`/projetos/github/${repo.name}`} className="hover:underline">
                    {repo.name}
                  </Link>
                </h2>

                <p className="text-gray-300 mb-4">{repo.description || "Sem descrição disponível."}</p>

                <div className="flex flex-wrap gap-4 mb-4">
                  {repo.topics &&
                    repo.topics.map((topic: string) => (
                      <span key={topic} className="bg-[#4CAF50]/20 text-[#4CAF50] px-2 py-1 rounded-md text-sm">
                        {topic}
                      </span>
                    ))}
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Star className="mr-1" size={16} />
                    <span>{repo.stargazers_count} stars</span>
                  </div>

                  <div className="flex items-center">
                    <GitFork className="mr-1" size={16} />
                    <span>{repo.forks_count} forks</span>
                  </div>

                  {repo.language && (
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#4CAF50] mr-1"></div>
                      <span>{repo.language}</span>
                    </div>
                  )}

                  <div className="flex items-center">
                    <Calendar className="mr-1" size={16} />
                    <span>Atualizado em {formatDate(repo.updated_at)}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <Link href={`/projetos/github/${repo.name}`} className="text-[#4CAF50] hover:underline">
                    Ver detalhes
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">Carregando repositórios ou nenhum repositório encontrado...</p>
            </div>
          )}
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

