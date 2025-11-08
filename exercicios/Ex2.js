const fs = require('fs');
const data = new Date();
const log = `Novo acesso em ${data.toString()}\n`;
fs.appendFileSync('log.txt', log);
console.log('Log adicionado com sucesso!');
