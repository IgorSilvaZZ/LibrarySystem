import { ZodIssue } from "zod";

interface MessagesIssues {
  message: string;
}

export function createIssuesErros(issues: ZodIssue[]): MessagesIssues[] {
  const issuesErrors = issues.map((issue) => ({ message: issue.message }));

  return issuesErrors;
}
