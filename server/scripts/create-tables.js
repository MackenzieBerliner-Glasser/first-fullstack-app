const pg = require('pg');

const Client = pg.Client;

const databaseUrl = 'postgres://localhost:5432/famous_people';

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS celebrities (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256) NOT NULL,
        gender VARCHAR(256),
        age INTEGER NOT NULL,
        tool BOOLEAN,
        description VARCHAR(1024)
      );
    `);
  })
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });