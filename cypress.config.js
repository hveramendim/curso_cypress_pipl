const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configuración adicional de eventos si es necesario
      return config;
    },
    baseUrl: 'http://localhost:3000',  // Asegúrate de que el servidor esté levantado
    video: true,
    retries: {
      runMode: 2,
      openMode: 1,
    },
  },
  projectId: 'uvpmbq',  // Reemplaza con el ID correcto de tu proyecto en Cypress Dashboard
});
