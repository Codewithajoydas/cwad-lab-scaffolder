#!/usr/bin/env node

import { Command } from "commander";

import { CLI_DESCRIPTION, CLI_NAME, CLI_VERSION } from "./config/cli.js";
import { registerHelloCommand } from "./commands/hello.js";

const program = new Command();

program
  .name(CLI_NAME)
  .description(CLI_DESCRIPTION)
  .version(CLI_VERSION)
  .showSuggestionAfterError();

registerHelloCommand(program);

program.parseAsync(process.argv).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});