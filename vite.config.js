import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure correct output folder
  },
  server: {
    historyApiFallback: true, // This is for local dev, not production
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
});
