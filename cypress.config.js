const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "tvsxak",
  e2e: {
		baseUrl: 'http://localhost:3000',
		video: false,
		screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
