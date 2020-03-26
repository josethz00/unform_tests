const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); //especifica o tipo de conexão usada, no caso, de desenvolvimento

module.exports = connection;