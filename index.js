const { EaglerServerProxy } = require('eaglercraft-server');

const server = new EaglerServerProxy({
    bind: '0.0.0.0',
    port: process.env.PORT || 8081,
    targetAddress: 'TU_IP_DE_ATERNOS.aternos.me', // Aquí irá la dirección de tu servidor de Aternos
    targetPort: 12345 // Aquí irá el puerto numérico de tu servidor de Aternos
});

server.listen();
console.log('¡Proxy de Eaglercraft iniciado con éxito para JhoanCraft!');
