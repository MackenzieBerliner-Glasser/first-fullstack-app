const client = require('../db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS famous (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256) NOT NULL,
      known VARCHAR(20) UNIQUE NOT NULL
    );
    CREATE TABLE IF NOT EXISTS celebrities (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256) NOT NULL,
      fame_id INTEGER NOT NULL REFERENCES famous(id),
      gender VARCHAR(256),
      age INTEGER NOT NULL,
      tool BOOLEAN,
      description VARCHAR(1024)
    );
  `)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });