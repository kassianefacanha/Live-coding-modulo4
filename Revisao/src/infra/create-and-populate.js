/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/database.db');



const PESSOAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PESSOAS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "SENHA" varchar(64)
  );`;

const ADD_PESSOAS_DATA = `
INSERT INTO PESSOAS (ID, NOME, EMAIL, SENHA)
VALUES 
    (1, 'Eugênio Oliveira', 'eugenio.oliveira@bol.com.br', '*******'),
    (2, 'Olívia Ribeiro', 'olivia.ribeiro@gmail.com', '********'),
    (3, 'Mirtes Faria Lima', 'mirtes_fl@yahoo.com', '********')
`

function criaTabelaUsr() {
    db.run(PESSOAS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de pessoas");
    });
}


function populaTabelaUsr() {
    db.run(ADD_PESSOAS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de pessoas");
    });
}


db.serialize( ()=> {
    criaTabelaUsr();
    populaTabelaUsr();
});