export class ValidationErrors {
  public readonly issues: object[];

  public readonly statusCode: number;

  constructor(issues: object[], statusCode = 400) {
    this.issues = issues;
    this.statusCode = statusCode;
  }
}
