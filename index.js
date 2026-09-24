const { EaglerServerProxy } = require('eaglercraft-server');

const server = new EaglerServerProxy({
    bind: '0.0.0.0',
    port: process.env.PORT || 8081,
    targetAddress:jhoan731.aternos.me
    targetPort:jhoan731.aternos.me:46730
});

server.listen();
console.log('¡Proxy de Eaglercraft iniciado con éxito para JhoanCraft!');
