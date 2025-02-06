import { Octokit } from "@octokit/rest"
import { numberFormatter } from "./number-formatter"

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

// "https://api.npms.io/v2/package/@agniflow-ui%2Freact"
export async function getGithubStars() {
  let count: number

  try {
    const repo = await octokit.repos.get({
      owner: "agniflow-ui",
      repo: "agniflow-ui",
    })
    count = repo.data.stargazers_count
  } catch (error) {
    count = 19_700
  }

  return {
    count,
    prettyCount: numberFormatter.format(count),
  }
}
