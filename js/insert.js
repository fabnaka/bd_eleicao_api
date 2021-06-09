const db = require('./database')

async function createTables(){
    await db.connect()

    await db.query (`CREATE TABLE evento(
        id serial PRIMARY KEY,
        nome VARCHAR (50) UNIQUE NOT NULL
    )`)

    await db.end()

    console.log("Tabelas Criadas");
}

createTables()