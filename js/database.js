const pg = require('pg')

const client = new pg.Client({
    user: 'DOCKER',
    host: 'localhost',
    database: 'postgres',
    password: '123456',
    port: 4321,
})


module.exports = client