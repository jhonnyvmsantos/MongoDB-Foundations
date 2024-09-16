// DEFINE O NOME DO BD
const database = 'Libri_DB'

// DEFINE O NOME DA COLLECTION
const collection = 'Libri-Collection'

//ACESSO AO BANCO DE DADOS: Libri_DB
use(database)

db[collection].deleteOne(
    { "categoria": "Ficção Científica" } //CLAUSULA QUE DETERMINA QUEM SERÁ DELETADO (ELE IRÁ DELETAR APENAS O PRIMEIRO QUE ENCONTRAR)
)