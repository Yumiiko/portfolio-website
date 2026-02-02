import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio-website/", // MUST match your repository name
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          icons: ["react-icons"],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: false,
    },
  },
});