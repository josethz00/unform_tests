const express = require('express');
const routes = require('./routes')
const cors = require('cors');
const app = express();


app.use(cors());
/*
cors({
    origin: 'https://meulinkdehost.com'
})
*/ 
app.use(express.json()); //informa ao node que está sendo utilizado o formato json nas requisições
 //request guarda todos os dados da requisição      response - responsavel por retornar uma resposta ao usuario
app.use(routes);

//MÉTODOS HTTP (funciona tudo com get, mas não será uma API RESTFULL)
//O NAVEGADOR SÓ ACEITA MÉTODOS GET, POST NÃO
/*
get = buscar informação, pegar do backend
post = criar uma informação no backend
put = alterar uma info no backend
delete = deletar uma informação no backend
*/

/*Tipos de Parâmetros
Query Params: Parâmetros nomeados enviados na rota após um ponto de interrogação, para buscar, filtrar, paginar (req.query)
Route Params: Parâmetros utilizados para identificar recursos(users/iddouser)                                   (req.params)
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos, pega os dados do json
*/
app.listen(3333);