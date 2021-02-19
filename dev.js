const { createServer } = require('vite');

async function bootstrap() {
  const viteServer = await createServer({
    server: { middlewareMode: true },
  });

  // const { createApp } = await viteServer.ssrLoadModule('./src/main.ts');
  // let app = await createApp;
  // app.use(viteServer.middlewares);
  // await app.listen(3000);

  // viteServer.watcher.on('change', async () => {
  //   viteServer.config.logger.info('on change');
  //   setTimeout(async () => {
  //     viteServer.config.logger.info('restarting server');
  //     // await app.close();
  //     const { createApp } = await viteServer.ssrLoadModule('./src/main.ts');
  //     app = await createApp;
  //     // await app.listen(3000);
  //     await app.init();
  //   }, 2000);
  // });
}

bootstrap();
