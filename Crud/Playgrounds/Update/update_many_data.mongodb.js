// DEFINE O NOME DO BD
const database = 'Libri_DB'

// DEFINE O NOME DA COLLECTION
const collection = 'Libri-Collection'

//ACESSO AO BANCO DE DADOS: Libri_DB
use(database)

db[collection].updateMany(
    { "categoria": "Ficção Científica" }, //CLAUSULA WHERE P/DETERMINAR QUEM ALTERAR (SE TIVER AS CHAVES VAZIAS, IRÁ ALTERAR TODOS)
    {
        $set: { "valor": 100 }, // ITEM/VALOR A SER ALTERADO (EXIST -> ALTERA O ITEM || NO EXIST -> CRIA O ITEM)
    }
)