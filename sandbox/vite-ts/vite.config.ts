import react from "@vitejs/plugin-react"
import { resolve } from "path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@agniflow-ui/react": resolve("..", "..", "packages/react/src"),
    },
  },
})
