import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { microappConfig } from "./microapp.config";

const DEFAULT_ENTRY = "./xoos-microapp.js";

function xoosManifestPlugin(): Plugin {
  return {
    name: "xoos-manifest",

    generateBundle() {
      const resolvedEntry =
        process.env.XOOS_MICROAPP_ENTRY?.trim() ||
        microappConfig.entry?.trim() ||
        DEFAULT_ENTRY;

      this.emitFile({
        type: "asset",
        fileName: "xoos-manifest.json",
        source:
          JSON.stringify(
            {
              schemaVersion: microappConfig.schemaVersion,
              microappKey: microappConfig.microappKey,
              version: microappConfig.version,
              elementName: microappConfig.elementName,
              entry: resolvedEntry,
              contractVersion: microappConfig.contractVersion,
              minimumRuntimeVersion:
                microappConfig.minimumRuntimeVersion,
            },
            null,
            2,
          ) + "\n",
      });
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    xoosManifestPlugin(),
  ],

  publicDir: false,

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },

    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
    ],
  },

  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },

  build: {
    outDir: "dist-microapp",
    emptyOutDir: true,
    sourcemap: false,
    target: "es2020",

    lib: {
      entry: path.resolve(
        __dirname,
        "src/microapp/entry.ts",
      ),
      formats: ["es"],
      fileName: () => "xoos-microapp.js",
    },

    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
