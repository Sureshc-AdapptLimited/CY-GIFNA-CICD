const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalModifyObstructiveThirdPartyCode: true,
  failOnStatusCode: false,
  defaultCommandTimeout: 20000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://gifna-stage.who.int/",
  },
});
