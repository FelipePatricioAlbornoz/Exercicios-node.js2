const fs = require('fs');
fs.writeFileSync('mensagem.txt', 'Persistência de dados em Node.js');
const texto = fs.readFileSync('mensagem.txt', 'utf8');
console.log(texto);
