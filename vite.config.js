import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure output directory is set correctly
  },
  server: {
    historyApiFallback: true, // Ensures dev server handles routing properly
  },
});
