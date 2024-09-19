import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "utz2tx",
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
