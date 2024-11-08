// vue.config.js
module.exports = {
  devServer: {
    host: "0.0.0.0", // Allow connections from any IP
    port: 8080, // Ensure it matches your IDE's port
    allowedHosts: "all", // Allow all external hosts
    client: {
      webSocketURL: "wss://8080-kc85-pancancerawareap-kkvluprv1rt.ws.codeinstitute-ide.net/ws", // Use your HTTPS IDE WebSocket URL
    },
  },
};
