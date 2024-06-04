// DEFINE O NOME DO BD
const database = 'Libri_DB'

// DEFINE O NOME DA COLLECTION
const collection = 'Libri-Collection'

//ACESSO AO BANCO DE DADOS: Libri_DB
use(database)

db[collection].deleteMany(
    { "titulo": { $ne: "Os Robôs da Alvorada" } } //CLAUSULA QUE DETERMINA QUEM SERÁ DELETADO (POSSÍVEL NEGAR CLAUSLA COM "$ne")
)