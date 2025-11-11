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
