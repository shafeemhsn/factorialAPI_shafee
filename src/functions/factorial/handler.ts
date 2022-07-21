import { clientErrorResponse, successResponse } from "@libs/api-gateway";

const factorial = async (event) => {
  const querystring = event.queryStringParameters;
  const input = querystring.input;

  if (querystring === null) {
    return clientErrorResponse({
      body: 'Please enter a number in the end of the url "?input=<number>"',
    });
  }

  if (isNaN(input)) {
    return clientErrorResponse({
      errorMessage: "Please enter a number",
    });
  }

  //Factorial Calcualtion

  function factorialize(num: number) {
    if (num === 0 || num === 1) return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  const factNum = factorialize(input);

  if (input >= 1 && input < 100) {
    return successResponse({
      input: input,
      factorial: factNum,
    });
  } else {
    return clientErrorResponse({
      input: input,
      factorial: "error(The value should be less than 100)",
    });
  }
};

export const main = factorial;
