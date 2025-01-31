const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configuración de eventos
      return config;
    },
    //baseUrl: 'http://localhost:3000',  // Asegúrate de que el servidor esté disponible si necesitas pruebas E2E
    video: true,
    retries: {
      runMode: 2,
      openMode: 1,
    },
  },
});
