import path from "path";
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [tailwindcss(), TanStackRouterVite({autoCodeSplitting: true}), react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: Number(env.VITE_SERVER_PORT),
      proxy: {
        '/api/': {
          target: `${env.VITE_SERVER_URL}:${env.API_SERVER_PORT}`,
        },
      },
    },
  }
});
