# Serverless + ESM + TypeScript
This is a working example of a Serverless Framework project using ESM and TypeScript.
The TypeScript types for Serverless are provided by [@serverless/typescript](https://www.npmjs.com/package/@serverless/typescript) and referenced as JSDoc comments in the `serverless.mjs` file.

## Issue
Serverless Framework doesn't support ESM and TypeScript for `serverless.mts` at the moment.
See this [issue](https://github.com/serverless/serverless/pull/11147) for more details.