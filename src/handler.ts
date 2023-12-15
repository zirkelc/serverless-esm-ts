import type { Handler } from 'aws-lambda';
import middy from '@middy/core'
import inputOutputLogger from '@middy/input-output-logger'

const lambdaHandler: Handler = async (event, context) => {
  const response = {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({ message: 'hello world' })
  }
  return response
}

export const handler = middy().use(inputOutputLogger()).handler(lambdaHandler)