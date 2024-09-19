import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "utz2tx",
  video: true,
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
