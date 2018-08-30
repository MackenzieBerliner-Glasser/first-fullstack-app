const client = require('../db-client');

const famous = require('./famous.json');

Promise.all(
  famous.map(fame => {
    return client.query(`
        INSERT INTO famous (name, known)
        VALUES ($1, $2);
    `,
    [fame.name, fame.known]
    );
  })
)
  .then(
    () => console.log('seed data load sucessful'),
    err => console.error(err)
  )
  .then(() => client.end());