const editora = require('../models/editoraModel');
console.log("Erro getAll: " + e.message);
exsport.getAll = async (req, res) => {
    try {
        const editoras = await editora.getAll();
        res.json(editoras);
    } catch (e)  {
        res.status(500).json({ 'Erro getAll': e.menssage});
    }
};