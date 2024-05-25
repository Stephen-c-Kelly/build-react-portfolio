const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'w7tfia',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
