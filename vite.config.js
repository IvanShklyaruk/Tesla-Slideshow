import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Tesla-Slideshow/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
