import { ZodIssue } from "zod";

export interface TypeErrorValidation {
  success: boolean;
  error: {
    issues: ZodIssue[];
  };
}
