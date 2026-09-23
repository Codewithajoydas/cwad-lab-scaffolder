import logSymbols from "log-symbols";

export function showWelcomeMessage() {
  console.log();

  console.log("╔══════════════════════════════════════════════════╗");
  console.log("║                                                  ║");
  console.log("║              CWAD LAB SCAFFOLDER                 ║");
  console.log("║                                                  ║");
  console.log("╚══════════════════════════════════════════════════╝");

  console.log();

  console.log(
    `${logSymbols.info}  Professional project scaffolding CLI`,
  );

  console.log(
    "  Generate production-ready project structures",
  );

  console.log();

  console.log("  Supported project types:");
  console.log("  • Web applications");
  console.log("  • Node.js APIs");
  console.log("  • Full-stack applications");
  console.log("  • React Native / Expo");
  console.log("  • Electron applications");
  console.log("  • Monorepos");

  console.log();

  console.log("  Let's build something great.");

  console.log();
}