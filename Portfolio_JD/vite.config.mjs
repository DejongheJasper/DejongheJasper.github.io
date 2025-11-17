import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

export default {
  base: '/',
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        internship: resolve(__dirname, 'src/internship.html'),
        bikestore: resolve(__dirname, 'src/bikestore.html'),
        canvix: resolve(__dirname, 'src/canvix.html'),
        kom_op_tegen_kanker: resolve(__dirname, 'src/kom-op-tegen-kanker.html'),
        record_break: resolve(__dirname, 'src/record-break.html'),
        aquapure: resolve(__dirname, 'src/aquapure.html'),
      },
    },
  },
  server: {
    port: 8080,
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
};
