import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
//@ts-ignore
import path from "path";

export default defineConfig({
  plugins: [react(), dts({ include: ["src"] })],
  build: {
    lib: {
      //@ts-ignore
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "loader",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "index.css";
          return `assets/[name][extname]`;
        },
      },
    },
    cssCodeSplit: false,
    assetsDir: "assets",
  },
});
