const fs = require('fs');

async function executar() {
  await fs.writeFile('mensagem.txt', 'Persistência de dados em Node.js');
  const texto = await fs.readFile('mensagem.txt', 'utf8');
  console.log(texto);
}

executar();
