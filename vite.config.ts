import MillionLint from "@million/lint";
// vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; 
import tailwindcss from "@tailwindcss/vite";

const ReactCompilerConfig = {};

// https://vite.dev/config/
export default defineConfig({
  plugins: [MillionLint.vite({
    enabled: true
  }), react({
    babel: {
      plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
    },
  }), tailwindcss()],
});
