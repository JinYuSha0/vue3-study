import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const resolve = (dir) => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  base: "/",
  mode: "development",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve("src"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve("./index.html"),
      },
    },
  },
});
