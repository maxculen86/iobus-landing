import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/cloudflare" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig(({ mode }) => {
  // Cargar variables de entorno
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [
      remixCloudflareDevProxy(),
      remix({
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
          v3_singleFetch: true,
          v3_lazyRouteDiscovery: true,
        },
      }),
      tsconfigPaths(),
      {
        name: 'handle-chrome-devtools',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/.well-known/appspecific/com.chrome.devtools.json') {
              res.setHeader('Content-Type', 'application/json');
              res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
              res.end(JSON.stringify({}));
              return;
            }
            next();
          });
        },
      },
    ],
    // Exponer variables de entorno al cliente
    define: {
      'process.env.BREVO_API_KEY': JSON.stringify(env.BREVO_API_KEY),
      'process.env.CONTACT_EMAIL': JSON.stringify(env.CONTACT_EMAIL),
    },
  };
});
