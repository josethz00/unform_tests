const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const { page=1 } = request.query; //http://localhost:3333/incidents?page=3
        const [count] = await connection('incidents').count(); //contar o total de registros
        //coloca entre colchetes para pegar o indice zero
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page -1)*5)
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']); //mostrará o numero de casos no cabecalho da requisição ao inves de mandar via json

        return response.json(incidents);
    },
    async create (request, response){
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization; //header é para enviar infos de login e etc...mais seguro, authorization
        // é o nome do parametro do id passado no header

        const [id] = await connection('incidents').insert({  //para pegar o id
            title,
            description,
            value,
            ong_id, 
        });

        return response.json({id});
    }, 
    async delete(request, response){
        const { id } = request.params; //params pq pega direto da url
        const ong_id = request.headers.authorization; //header é para enviar infos de login e etc...mais seguro, authorization
        //puxa o id da ong, para verificar se o caso q a ong quer deletar, realmente foi pedido por ela propria
        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first(); //retorna so um
        if(incident.ong_id != ong_id){ //401 status code quando nao tem autorização
            return response.status(401).json({error: "OPERATION NOT PERMITED"});
        }
        await connection('incidents').where('id', id).delete();

        return response.status(204).send(); //204 é quando deu certo, porém não há mensagem a ser enviada de volta
    }
};