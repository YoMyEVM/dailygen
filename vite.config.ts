import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// Simplified Vite config with Tailwind CSS plugin
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      // Vite automatically uses PostCSS configuration
    ],
    css: {
      postcss: {
        plugins: [
          tailwindcss({
            config: resolve(__dirname, "tailwind.config.mjs"),  // Reference the Tailwind config
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
    },
  };
});
