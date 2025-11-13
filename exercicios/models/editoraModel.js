const poll = require('../config/db');

const Editora = {

    async getAll(){
        const result = await poll.query('SELECT * FROM editoras;');
        return result.rows;
    }
};

module.exports = Editora;