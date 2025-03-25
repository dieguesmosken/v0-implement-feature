import Link from "next/link"
import { ArrowLeft, Star, GitFork, Eye, Calendar, Code, ExternalLink, Clock, GitBranch, FileCode } from "lucide-react"
import { notFound } from "next/navigation"

interface RepoParams {
  params: {
    repo: string
  }
}

async function getRepoDetails(repoName: string) {
  try {
    const username = "dieguesmosken"
    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      if (response.status === 404) {
        return null
      }
      throw new Error(`GitHub API responded with status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching repo details for ${repoName}:`, error)
    return null
  }
}

async function getRepoReadme(repoName: string) {
  try {
    const username = "dieguesmosken"
    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/readme`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      if (response.status === 404) {
        return null
      }
      throw new Error(`GitHub API responded with status: ${response.status}`)
    }

    const data = await response.json()
    // The content is base64 encoded
    const content = atob(data.content)
    return content
  } catch (error) {
    console.error(`Error fetching readme for ${repoName}:`, error)
    return null
  }
}

async function getRepoLanguages(repoName: string) {
  try {
    const username = "dieguesmosken"
    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/languages`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching languages for ${repoName}:`, error)
    return {}
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

export default async function RepoDetails({ params }: RepoParams) {
  const repoName = params.repo
  const repo = await getRepoDetails(repoName)
  const readme = await getRepoReadme(repoName)
  const languages = await getRepoLanguages(repoName)

  if (!repo) {
    notFound()
  }

  // Calculate language percentages
  const totalBytes = Object.values(languages).reduce((sum: any, bytes: any) => sum + bytes, 0)
  const languagePercentages = Object.entries(languages)
    .map(([name, bytes]: [string, any]) => ({
      name,
      percentage: Math.round((bytes / totalBytes) * 100),
    }))
    .sort((a, b) => b.percentage - a.percentage)

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
        <div className="flex flex-wrap gap-2 mb-6">
          <Link href="/projetos" className="flex items-center text-[#4CAF50] hover:underline">
            <ArrowLeft className="mr-1" size={16} />
            Projetos
          </Link>
          <span className="text-gray-500">/</span>
          <Link href="/projetos/github" className="flex items-center text-[#4CAF50] hover:underline">
            GitHub
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-gray-300">{repoName}</span>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#4CAF50] mb-2">{repo.name}</h1>
          <p className="text-xl text-gray-300 mb-4">{repo.description || "Sem descrição disponível."}</p>

          <div className="flex flex-wrap gap-4 mb-6">
            {repo.topics &&
              repo.topics.map((topic: string) => (
                <span key={topic} className="bg-[#4CAF50]/20 text-[#4CAF50] px-3 py-1 rounded-full text-sm">
                  {topic}
                </span>
              ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#4CAF50]/30">
              <div className="flex items-center mb-1">
                <Star className="text-[#4CAF50] mr-2" size={20} />
                <span className="text-gray-300 font-medium">Stars</span>
              </div>
              <p className="text-2xl font-bold text-white">{repo.stargazers_count}</p>
            </div>

            <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#4CAF50]/30">
              <div className="flex items-center mb-1">
                <GitFork className="text-[#4CAF50] mr-2" size={20} />
                <span className="text-gray-300 font-medium">Forks</span>
              </div>
              <p className="text-2xl font-bold text-white">{repo.forks_count}</p>
            </div>

            <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#4CAF50]/30">
              <div className="flex items-center mb-1">
                <Eye className="text-[#4CAF50] mr-2" size={20} />
                <span className="text-gray-300 font-medium">Watchers</span>
              </div>
              <p className="text-2xl font-bold text-white">{repo.watchers_count}</p>
            </div>

            <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#4CAF50]/30">
              <div className="flex items-center mb-1">
                <GitBranch className="text-[#4CAF50] mr-2" size={20} />
                <span className="text-gray-300 font-medium">Branch Padrão</span>
              </div>
              <p className="text-xl font-bold text-white">{repo.default_branch}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-xl font-bold text-[#4CAF50] mb-4">Informações</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Calendar className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-gray-400">Criado em</p>
                    <p className="text-white">{formatDate(repo.created_at)}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-gray-400">Última atualização</p>
                    <p className="text-white">{formatDate(repo.updated_at)}</p>
                  </div>
                </div>

                {repo.language && (
                  <div className="flex items-start">
                    <Code className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <p className="text-gray-400">Linguagem principal</p>
                      <p className="text-white">{repo.language}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-start">
                  <FileCode className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-gray-400">Tamanho</p>
                    <p className="text-white">{(repo.size / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#4CAF50] border border-[#4CAF50] rounded-md px-4 py-2 hover:bg-[#4CAF50]/10 transition-colors inline-flex"
                >
                  <ExternalLink size={18} />
                  Ver no GitHub
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#4CAF50] mb-4">Linguagens</h2>
              {languagePercentages.length > 0 ? (
                <div className="space-y-3">
                  {languagePercentages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-white">{lang.name}</span>
                        <span className="text-gray-400">{lang.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-[#4CAF50] h-2.5 rounded-full" style={{ width: `${lang.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">Informações de linguagens não disponíveis.</p>
              )}
            </div>
          </div>

          {readme && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-[#4CAF50] mb-4">README</h2>
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#4CAF50]/30 prose prose-invert max-w-none">
                <pre className="whitespace-pre-wrap">{readme}</pre>
              </div>
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

