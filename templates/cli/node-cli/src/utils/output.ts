import chalk from "chalk";

export function success(message: string) {
  console.log(chalk.green(`✔ ${message}`));
}

export function info(message: string) {
  console.log(chalk.cyan(message));
}

export function warning(message: string) {
  console.log(chalk.yellow(message));
}

export function error(message: string) {
  console.error(chalk.red(`✖ ${message}`));
}