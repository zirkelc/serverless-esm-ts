/**
 * @type {import('@serverless/typescript').AWS}
 */
export default {
  service: 'serverless-esm-ts',
  frameworkVersion: '3',
  variablesResolutionMode: '20210326',
  plugins: [
    'serverless-esbuild',
  ],
  custom: {
    esbuild: {
      format: 'esm',
      outExtension: { '.js': '.mjs' },
      bundle: true,
      minify: false,
      sourcemap: true,
      keepOutputDirectory: true,
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
    region: 'us-east-1',
    stage: 'dev',
    lambdaHashingVersion: '20201221',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  functions: {
    hello: {
      handler: 'src/handler.handler',
      url: true,
    }
  }
}