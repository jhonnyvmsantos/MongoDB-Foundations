// DEFINE O NOME DO BD
const database = 'Libri_DB'

// DEFINE O NOME DA COLLECTION
const collection = 'Libri-Collection'

//ACESSO AO BANCO DE DADOS: Libri_DB
use(database)

//INSERE 1 DOCUMENTO DE DADOS NA COLLECTION
db[collection].insertOne(
    {
        "codigo": "4",
        "titulo": "Robôs e Império",
        "autor": "Isaac Asimov",
        "descricao": "A humanidade evoluiu muito a partir então, e, para desgosto dos Siderais, o plano delineado por Baley finalmente começa a dar certo. Mas o universo se encontra em um impasse, enquanto cientistas poderosos e vingativos ameaçam destruir a Terra e tudo o que ela representa.",
        "imagem": "/livros/robos_imperio.jpg"
    }
);