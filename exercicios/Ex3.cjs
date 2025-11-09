const fs = require('fs');
const dbPath = './db.json';

// Ler o arquivo e atualizar (gostei muito por que é simples e direto)
let db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

db.usuarios.push({ id: 3, nome: 'Ana' });

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));


