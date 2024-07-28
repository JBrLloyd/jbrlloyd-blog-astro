import { InvalidRequestQueryParameterError } from "../errors/InvalidRequestQueryParameterError";

export const validateIntGreaterThanZero = (
  argName: string,
  arg: string,
  requestUrl: URL,
) => {
  if (Number.isNaN(arg)) {
    throw new InvalidRequestQueryParameterError(
      "Request argument was not a number",
      `Request argument '${argName}', was expected to be a number, received: '${arg}'`,
      requestUrl);
  }

  const value = Number.parseFloat(arg);

  if (!Number.isInteger(value)) {
    throw new InvalidRequestQueryParameterError(
      "Request argument was not an integer (whole number)",
      `Request argument '${argName}', was expected to be a number, received: '${arg}'`,
      requestUrl);
  }

  if (value <= 0) {
    throw new InvalidRequestQueryParameterError(
      "Request argument was not a number above 0",
      `Request argument '${argName}', was expected to be a number above zero, received: '${arg}'`,
      requestUrl);
  }

  return value;
}