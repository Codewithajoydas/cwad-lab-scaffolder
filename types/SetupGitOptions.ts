export type RepositoryVisibility = "public" | "private";

export type SetupGitOptions = {
  targetPath: string;
  repositoryName: string;
  visibility: RepositoryVisibility;
};