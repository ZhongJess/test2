import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { glob } from 'glob';

import liveReload from 'vite-plugin-live-reload';

function devPagesRewritePlugin() {
  let base = '/';
  return {
    name: 'dev-pages-rewrite',
    apply: 'serve',
    configResolved(config) {
      base = config.base;
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url) return next();
        const [pathname] = req.url.split('?');
        if (!pathname.startsWith(base)) return next();
        const relativePath = pathname.slice(base.length);
        if (/^[^/]+\.html$/.test(relativePath) && relativePath !== 'index.html') {
          req.url = req.url.replace(pathname, `${base}pages/${relativePath}`);
        }
        next();
      });
    },
  };
}

function moveOutputPlugin() {
  return {
    name: 'move-output',
    enforce: 'post',
    apply: 'build',
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith('pages/')) {
          const newFileName = fileName.slice('pages/'.length);
          bundle[fileName].fileName = newFileName;
        }
      }
    },
  };
}

export default defineConfig({
  // base 的寫法：
  // base: '/Repository 的名稱/'
  base: '/Sweetery/',
  plugins: [
    liveReload(['./layout/**/*.ejs', './pages/**/*.ejs', './pages/**/*.html', './index.html']),
    ViteEjsPlugin(),
    devPagesRewritePlugin(),
    moveOutputPlugin(),
  ],
  server: {
    // 啟動 server 時預設開啟的頁面
    open: 'index.html',
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries([
        ['index', fileURLToPath(new URL('index.html', import.meta.url))],
        ...glob
          .sync('pages/**/*.html')
          .map((file) => [
            path.relative('pages', file.slice(0, file.length - path.extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ]),
    },
    outDir: 'dist',
  },
});
