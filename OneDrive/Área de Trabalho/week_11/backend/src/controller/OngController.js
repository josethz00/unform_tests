const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        const ongs = await connection('ongs').select('*'); //SELECT * FROM ongs
        return response.json(ongs);
    },

    async create (request, response){
        //const data = request.body; //PEGA TDS OS DADOS DA REQUISIÇÃO
        const {name, email, whatsapp, city, uf} = request.body; //desestruturação para pegar cd um dos dados especificamente

        const id = crypto.randomBytes(4).toString('HEX');//gera 4 bytes de caracteres aleatorios, e dps os converte para uma string hexadecimal
        await connection('ongs').insert({
            id,
            name, //SHORT SYNTAX
            email, 
            whatsapp,
            city, 
            uf
        });
        return response.json({id});

    }
}