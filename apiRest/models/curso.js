module.exports = function(app) {
    var Schema = require('mongoose').Schema;

    var curso = Schema({
        codigo: Number,
        descricao: String,
        ch: Number
    });

    return db.model('cursos', curso);
}