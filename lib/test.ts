import { OutgoingHttpHeaders } from 'http';

interface ILambdaResponse {
  statusCode: number;
  headers: OutgoingHttpHeaders;
  body: string;
}

export const testFunction = async (event, context) => {

  const { TEST } = process.env;

  const headers: OutgoingHttpHeaders = {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
    'Access-Control-Allow-Credentials': 'true', // Required for cookies, authorization headers with HTTPS
  };

  const message = 'hello world';
  let response: ILambdaResponse;
  try {
    response = {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message, test: TEST })
    };
    return response;
  } catch (error) {
    response = {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Something went wrong.' })
    };
    return response;
  }
};
