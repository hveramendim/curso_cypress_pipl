module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configuración de eventos
    },
    // Elimina esta línea si no necesitas levantar un servidor
    // baseUrl: 'http://localhost:3000',
    video: true,
    retries: { runMode: 2, openMode: 1 },
  },
});
