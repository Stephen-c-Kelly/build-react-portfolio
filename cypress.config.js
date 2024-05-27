const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "w7tfia",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
