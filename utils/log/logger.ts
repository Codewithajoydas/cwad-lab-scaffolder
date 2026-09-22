import chalk from "chalk";
import symbols from "log-symbols";

export const logger = {
  info(message: string) {
    console.log(`${symbols.info}  ${chalk.blue(message)}`);
  },

  success(message: string) {
    console.log(`${symbols.success}  ${chalk.green(message)}`);
  },

  warn(message: string) {
    console.log(`${symbols.warning}  ${chalk.yellow(message)}`);
  },

  error(message: string) {
    console.error(`${symbols.error}  ${chalk.red(message)}`);
  },

  step(message: string) {
    console.log(`${chalk.cyan("›")}  ${chalk.cyan(message)}`);
  },

  detail(label: string, value: string) {
    console.log(
      `  ${chalk.gray(label + ":")} ${chalk.white(value)}`
    );
  },
};