const { createServer } = require('vite');

async function bootstrap() {
  const viteServer = await createServer({
    server: { middlewareMode: true },
  });

  const { createApp } = await viteServer.ssrLoadModule('./src/main.ts');
  let app = await createApp;

  // app.use(viteServer.middlewares);

  // app.use('*', async (req, res, next) => {
  //   try {
  //     const { createApp } = await viteServer.ssrLoadModule('./src/main.ts');
  //     app = await createApp;
  //     app.init();
  //     next();
  //   } catch (e) {
  //     viteServer && viteServer.ssrFixStacktrace(e);
  //     console.log(e.stack);
  //     res.status(500).end(e.stack);
  //   }
  // });

  await app.listen(3000);

  viteServer.watcher.on('change', async () => {
    // await app.close();
    const { createApp } = await viteServer.ssrLoadModule('./src/main.ts');
    app = await createApp;
    // await app.listen(3000);
    await app.init();
  });
}

bootstrap();
