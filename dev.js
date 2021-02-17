const { createServer } = require('vite');

async function bootstrap() {
  const server = await createServer({
    server: { middlewareMode: true },
  });

  await server.ssrLoadModule('./src/main.ts');
}

bootstrap();
