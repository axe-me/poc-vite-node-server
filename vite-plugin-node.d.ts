import { Plugin } from 'vite';
export declare interface VitePluginNodeConfig {
    appModule: string;
    framework: 'Express' | 'Nest';
}
export default function vitePluginNode(config: VitePluginNodeConfig): Plugin;
