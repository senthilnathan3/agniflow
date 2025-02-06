import * as p from "@clack/prompts"
import { Command } from "commander"
import { createRequire } from "node:module"
import { EjectCommand } from "./commands/eject.js"
import { SnippetCommand } from "./commands/snippet.js"
import { TypegenCommand } from "./commands/typegen.js"

process.setMaxListeners(Infinity)

const req = createRequire(import.meta.url)
const packageJson = req("@agniflow-ui/cli/package.json")

export async function run() {
  p.intro("agniflow CLI ⚡️")
  const program = new Command()
    .name("chakra-ui")
    .description("The official CLI for agniflow UI projects")
    .version(packageJson.version)

  program
    .addCommand(TypegenCommand)
    .addCommand(SnippetCommand)
    .addCommand(EjectCommand)

  program.parse()
}
