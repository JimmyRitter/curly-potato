import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  console.log(
    "path.resolve(__dirname, '../web'),",
    path.resolve(__dirname, "../web")
  );

  return {
    // vite config
    plugins: [react()],
    define: {
      VITE_API_URL: env.VITE_API_URL,
    },
    root: path.resolve(__dirname, "../web"),
  };
});
