const fs = require('fs').promises;
const path = require('path');
const dbPath = path.join(__dirname, 'db.json');

async function executarLeitura() {
    try {
        const data = await fs.readLine(dbPath);
        return JSON.parse(data);
        //'e' = 'erro'
    } catch  (e) {
        if (e.code ==='enoent') {
            return { usuarios: [] };
        }
        throw e;
    }
}

async function escreverDB(data) {
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
}

// Para usar, so escrever na terminal: node Ex4.js criar Ana e depois node Ex4.js listar

async function criarUsuario(nome) {
    const db = await readDB();
    const novoId = db.usuarios.length > 0 
        ? Math.max(...db.usuarios.map(u => u.id)) + 1 
        : 1;

    const novoUsuario = { id: novoId, nome };
    db.usuarios.push(novoUsuario);

    await writeDB(db);
    console.log('Usuario criado:', novoUsuario);
}

async function listarUsuarios() {
    const db = await readDB();
    console.log('Lista de usuarios:', db.usuarios);
}

//Exemplo de uso: node Ex4.js atualizar 2 Carlos

async function atualizarUsuario(id, novoNome) {
    const db = await readDB();
    const usuario = db.usuarios.find(u => u.id === id);

    if (usuario) {
        usuario.nome = novoNome;
        await writeDB(db);
        console.log('Usuário atualizado:', usuario);
    } else {
        console.log('Usuário não encontrado.');
    }
}

// Finalizando a parte 4 do exercicio com a funcao deletarUsuario.
//Exemplo de uso: node Ex4.js deletar 3
async function deletarUsuario(id) {
    const db = await readDB();
    const initialLength = db.usuarios.length;

    db.usuarios = db.usuarios.filter(u => u.id !== id);

    if (db.usuarios.length < initialLength) {
        await writeDB(db);
        console.log(`Usuário com id ${id} deletado.`);
    } else {
        console.log('Usuário não encontrado.');
    }
}
