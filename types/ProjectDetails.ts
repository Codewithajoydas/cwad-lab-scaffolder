export type ProjectType =
  | "express-javascript"
  | "node-api"
  | "express-typescript"
  | "cli"
  | "electron"
  | "chrome-extension"
  | "nextjs"
  | "react-vite"
  | "static-html"
  | "empty"
  | "expo"
  | "monorepo-fullstack"
  | "monorepo-nextjs"
  | "monorepo-react-express"
  | "node-javascript"
  | "node-typescript"
  | "npm-library";

export type ProjectDetails = {
    projectName: string;
    projectType: ProjectType;
};