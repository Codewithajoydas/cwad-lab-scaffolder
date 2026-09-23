import { Command } from "commander";

const program = new Command();

program
  .name("cwad-lab-scaffold")
  .description(
    "Professional project scaffolding CLI for modern apps, APIs, mobile, desktop, and monorepos.",
  )
  .version("1.0.0")
  .argument("[project-name]", "Name of the project")
  .argument("[project-type]", "Type of the project")
  .option("--install", "Install dependencies")
  .option("--no-install", "Skip dependency installation");

program.parse();

export default program;
