// basic express app
const express = require('express');
const app = express();

// logging
const morgan = require('morgan');
app.use(morgan('dev'));

// middleware (cors and read json body)
const cors = require('cors');
app.use(cors());
app.use(express.json());

// connect to the database
const client = require('./db-client');

// routes
app.get('/api/celebrities', (req, res) => {
  client.query(`
    SELECT 
      c.id,
      c.name, 
      f.id as "fameId",
      f.name as occupation
      FROM celebrities as c
      JOIN famous as f
      ON c.fame_id = f.id
      ORDER BY c.name
  `)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => console.log(err));
});

app.get('/api/celebrities/:id', (req, res) => {
  client.query(`
    SELECT 
      id,
      name, 
      gender,
      age,
      tool,
      description
    FROM celebrities
    WHERE id = $1;
  `,
  [req.params.id]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
  
});

app.post('/api/celebrities', (req, res) => {
  console.log('posting');
  const body = req.body;

  client.query(`
    INSERT INTO celebrities (name, gender, age, tool, description)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `,
  [body.name, body.gender, body.age, body.tool, body.description]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
});


app.listen(3000, () => console.log('app running...'));