// vite.config.ts
import { TanStackRouterVite } from "file:///home/victor/VottunDevs/vottun-qubic-bridge-react/node_modules/.pnpm/@tanstack+router-plugin@1.51.6_vite@5.4.2_@types+node@22.5.1_less@4.2.0_terser@5.31.6__webpack@5.94.0_esbuild@0.21.5_/node_modules/@tanstack/router-plugin/dist/esm/vite.js";
import react from "file:///home/victor/VottunDevs/vottun-qubic-bridge-react/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.0_@swc+helpers@0.5.12_vite@5.4.2_@types+node@22.5.1_less@4.2.0_terser@5.31.6_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "node:path";
import { normalizePath } from "file:///home/victor/VottunDevs/vottun-qubic-bridge-react/node_modules/.pnpm/vite@5.4.2_@types+node@22.5.1_less@4.2.0_terser@5.31.6/node_modules/vite/dist/node/index.js";
import { viteStaticCopy } from "file:///home/victor/VottunDevs/vottun-qubic-bridge-react/node_modules/.pnpm/vite-plugin-static-copy@1.0.6_vite@5.4.2_@types+node@22.5.1_less@4.2.0_terser@5.31.6_/node_modules/vite-plugin-static-copy/dist/index.js";
import { defineConfig } from "file:///home/victor/VottunDevs/vottun-qubic-bridge-react/node_modules/.pnpm/vitest@2.0.5_@types+node@22.5.1_jsdom@25.0.0_bufferutil@4.0.8_utf-8-validate@5.0.10__less@4.2.0_terser@5.31.6/node_modules/vitest/dist/config.js";
var __vite_injected_original_dirname = "/home/victor/VottunDevs/vottun-qubic-bridge-react";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(path.resolve("./src/assets/locales")),
          dest: normalizePath(path.resolve("./dist"))
        }
      ]
    })
  ],
  server: {
    host: true,
    strictPort: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    css: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS92aWN0b3IvVm90dHVuRGV2cy92b3R0dW4tcXViaWMtYnJpZGdlLXJlYWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS92aWN0b3IvVm90dHVuRGV2cy92b3R0dW4tcXViaWMtYnJpZGdlLXJlYWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3ZpY3Rvci9Wb3R0dW5EZXZzL3ZvdHR1bi1xdWJpYy1icmlkZ2UtcmVhY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBUYW5TdGFja1JvdXRlclZpdGUgfSBmcm9tIFwiQHRhbnN0YWNrL3JvdXRlci1wbHVnaW4vdml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJub2RlOnBhdGhcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZVBhdGggfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tIFwidml0ZS1wbHVnaW4tc3RhdGljLWNvcHlcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlc3QvY29uZmlnXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgcmVhY3QoKSxcbiAgICAgICAgVGFuU3RhY2tSb3V0ZXJWaXRlKCksXG4gICAgICAgIHZpdGVTdGF0aWNDb3B5KHtcbiAgICAgICAgICAgIHRhcmdldHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogbm9ybWFsaXplUGF0aChwYXRoLnJlc29sdmUoXCIuL3NyYy9hc3NldHMvbG9jYWxlc1wiKSksXG4gICAgICAgICAgICAgICAgICAgIGRlc3Q6IG5vcm1hbGl6ZVBhdGgocGF0aC5yZXNvbHZlKFwiLi9kaXN0XCIpKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgICAgaG9zdDogdHJ1ZSxcbiAgICAgICAgc3RyaWN0UG9ydDogdHJ1ZSxcbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdGVzdDoge1xuICAgICAgICBlbnZpcm9ubWVudDogXCJqc2RvbVwiLFxuICAgICAgICBzZXR1cEZpbGVzOiBbXCIuL3ZpdGVzdC5zZXR1cC50c1wiXSxcbiAgICAgICAgY3NzOiB0cnVlLFxuICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVUsU0FBUywwQkFBMEI7QUFDeFcsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLHNCQUFzQjtBQUMvQixTQUFTLG9CQUFvQjtBQUw3QixJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixtQkFBbUI7QUFBQSxJQUNuQixlQUFlO0FBQUEsTUFDWCxTQUFTO0FBQUEsUUFDTDtBQUFBLFVBQ0ksS0FBSyxjQUFjLEtBQUssUUFBUSxzQkFBc0IsQ0FBQztBQUFBLFVBQ3ZELE1BQU0sY0FBYyxLQUFLLFFBQVEsUUFBUSxDQUFDO0FBQUEsUUFDOUM7QUFBQSxNQUNKO0FBQUEsSUFDSixDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLEVBQ2hCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDeEM7QUFBQSxFQUNKO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDRixhQUFhO0FBQUEsSUFDYixZQUFZLENBQUMsbUJBQW1CO0FBQUEsSUFDaEMsS0FBSztBQUFBLEVBQ1Q7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
