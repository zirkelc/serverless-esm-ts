# Serverless + ESM + TypeScript
This is a working example of a Serverless Framework project using ESM and TypeScript. The TypeScript types for Serverless are provided by [@serverless/typescript](https://www.npmjs.com/package/@serverless/typescript).

## Issue
Serverless Framework doesn't support ESM and TypeScript for `serverless.mts`. If you run `sls deploy` in a project that has `"type": "module"` in its `package.json`, you will likely see an error like this:

```sh
$ sls deploy

Error:
Cannot load "serverless.ts": Initialization error: Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /Users/zirkelc/serverless.ts
require() of ES modules is not supported.
```

This issue is described in more detail in this [pull request](https://github.com/serverless/serverless/pull/11147) and this [issue](https://github.com/serverless/serverless/issues/11039).

## Workaround
Create a `serverless.cjs` file and use [jiti](https://github.com/unjs/jiti) to compile the `serverless.ts` on the fly. 

### Jiti v1

```js
// serverless.cjs
module.exports = require('jiti')(null, { interopDefault: true })(`${__dirname}/serverless.ts`);
```

### Jiti v2 

```js
// serverless.cjs
const { createJiti } = require('jiti');
const jiti = createJiti(null, { interopDefault: true });

module.exports = jiti.import(`${__dirname}/serverless.ts`, { default: true });
```

Then run `sls deploy` with the `--config` flag to specify the `serverless.cjs` file.

```sh
sls deploy --config serverless.cjs
```
