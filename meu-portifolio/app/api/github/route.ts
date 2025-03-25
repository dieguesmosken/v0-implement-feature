import { NextResponse } from "next/server"

export async function GET() {
  try {
    const username = "dieguesmosken"
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`)
    }

    const repos = await response.json()

    // Filter out forked repositories and sort by stars
    const filteredRepos = repos
      .filter((repo: any) => !repo.fork)
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)

    return NextResponse.json(filteredRepos)
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error)
    return NextResponse.json({ error: "Failed to fetch GitHub repositories" }, { status: 500 })
  }
}

