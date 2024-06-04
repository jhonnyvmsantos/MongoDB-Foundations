// DEFINE O NOME DO BD
const database = 'Libri_DB'

// DEFINE O NOME DA COLLECTION
const collection = 'Libri-Collection'

//ACESSO AO BANCO DE DADOS: Libri_DB
use(database)

/* Seleciona livros com valor maior que 100 reais ($gt) */
db[collection].find({ "valor": { $gt: 100 } });

/* Seleciona livros com valor menor que 100 reais ($lt) */
db[collection].find({ "valor": { $lt: 100 } });

/* Seleciona livros com valor maior ou igual a 100 reais ($gte) */
db[collection].find({ "valor": { $gte: 100 } });

/* Seleciona livros com valor menor ou igual a 100 reais ($lte) */
db[collection].find({ "valor": { $lte: 100 } });

/* Seleciona livros entre intervalo de valores de 100 até 150 ($lte) e ($gte) - ordenação ascendente  */
db[collection].find({ "valor": { $gte: 100, $lte: 150 } }).sort({ "valor": 1 });

/* Seleciona livros entre intervalo de valores de 100 até 150 ($lte) e ($gte) - ordenação descendente  */
db[collection].find({ "valor": { $gte: 100, $lte: 150 } }).sort({ "valor": -1 });

/* Seleciona livros entre intervalo de valores de 100 até 150 ($lte) e ($gte) - ordenação descendente  */
db[collection].find({ "valor": { $gte: 100, $lte: 150 } }, { '_id': 0, 'codigo': 0 }).sort({ "valor": -1 });