import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";

export default defineConfig(() => {
  return {
    plugins: [react()],
    css: {
      postcss: {
        plugins: [
          tailwind({
            config: resolve(__dirname, "tailwind.config.mjs"),
          }),
        ],
      },
    },
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        app: resolve(__dirname, "src", "app"),
        components: resolve(__dirname, "src", "components"),
        hooks: resolve(__dirname, "src", "hooks"),
      },
      build: {
        target: "es2020",
      },
    },
  };
});
