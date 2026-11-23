import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import packageJson from "./package.json";

// A fresh ID is embedded in every build, including Vercel deployments.
const buildId = new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
    __BUILD_ID__: JSON.stringify(buildId),
  },
});
