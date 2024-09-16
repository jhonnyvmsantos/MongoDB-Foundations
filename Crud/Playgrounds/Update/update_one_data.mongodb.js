// DEFINE O NOME DO BD
const database = 'Libri_DB'

// DEFINE O NOME DA COLLECTION
const collection = 'Libri-Collection'

//ACESSO AO BANCO DE DADOS: Libri_DB
use(database)

db[collection].updateOne(
    { "titulo": "As Cavernas de Aço" }, //CLAUSULA WHERE P/DETERMINAR QUEM ALTERAR (SE TIVER MAIS QUE 1, IRÁ FALHAR)
    {
        $set: { "valor": 250 }, // ITEM/VALOR A SER ALTERADO (EXIST -> ALTERA O ITEM || NO EXIST -> CRIA O ITEM)
    }
)