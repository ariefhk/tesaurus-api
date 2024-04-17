export class APIError extends Error {
  constructor(public status: number, public message: string) {
    super(message);
  }
}
