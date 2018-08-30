const client = require('../db-client');

const celebrities = require('./celebrities.json');

Promise.all(
  celebrities.map(celeb => {
    return client.query(`
      INSERT into celebrities (
        fame_id, name, gender, age, tool, description
      ) 
      SELECT
        id as fame_id,
        $1 as name,
        $2 as gender,
        $3 as age,
        $4 as tool,
        $5 as description
      FROM famous
      WHERE known = $6;
    `,
    [celeb.name, celeb.gender, celeb.age, celeb.tool, celeb.description, celeb.job]
    );
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());