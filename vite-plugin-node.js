import { NestFactory } from '@nestjs/core';
import swc from 'rollup-plugin-swc';
const express = require('express');
export default function vitePluginNode(config) {
    let resolvedConfig;
    let app;
    return {
        name: 'vite-plugin-node',
        config: () => ({
            server: {
                middlewareMode: true,
            },
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
                },
            ],
        }),
        configResolved(config) {
            resolvedConfig = config;
        },
        configureServer: (server) => {
            return async () => {
                const { AppModule } = await server.ssrLoadModule(config.appModule);
                app = await NestFactory.create(AppModule);
                app.use(server.middlewares);
                await app.listen(3000);
            };
        },
        handleHotUpdate: async ({ server }) => {
            resolvedConfig.logger.info('handleHotUpdate');
            if (app) {
                app.close();
            }
            const { AppModule } = await server.ssrLoadModule(config.appModule);
            app = await NestFactory.create(AppModule);
            app.use(server.middlewares);
            await app.listen(3000);
            resolvedConfig.logger.info('handleHotUpdate end');
        },
    };
}
