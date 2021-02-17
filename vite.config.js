import swc from 'rollup-plugin-swc';
/**
 * @type {import('vite').UserConfig}
 */
const config = {
  // ...
  plugins: [
    {
      ...swc({
        jsc: {
          loose: true,
          target: 'es2019',
          parser: {
            syntax: 'typescript',
            decorators: true,
          },
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
          },
        },
      }),
      enforce: 'pre',
    }
  ]
}

export default config;
