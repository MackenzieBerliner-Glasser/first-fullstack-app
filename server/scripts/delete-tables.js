const pg = require('pg');

const Client = pg.Client;

const databaseUrl = 'postgres://localhost:5432/famous_people';

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
     DROP TABLE IF EXISTS celebrities;
    `);
  })
  .then(
    () => console.log('delete tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });