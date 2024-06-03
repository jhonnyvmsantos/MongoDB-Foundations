// DEFINE O NOME DO BD
const database = 'Libri_DB'

// DEFINE O NOME DA COLLECTION
const collection = 'Libri-Collection'

//ACESSO AO BANCO DE DADOS: Libri_DB
use(database)

//INSERE 1 DOCUMENTO DE DADOS NA COLLECTION
db[collection].insertOne(
    {
        "codigo":"1",
        "titulo": "As Cavernas de Aço",
        "autor": "Isaac Asimov",
        "descricao": "As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclusive nos dramas policiais.",
        "imagem":"/livros/cavernas_aco.jpg",
        "valor": 120,
        "categoria":"Ficção Científica"
      },
);