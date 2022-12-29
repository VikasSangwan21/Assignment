const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  video: false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  e2e: {  
   baseUrl: "https://demoqa.com/",
   env: {
    commandDelay: 20,
  },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
