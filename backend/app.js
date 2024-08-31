const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       
  password: '',     
  database: 'test'   
});

db.connect((err) => {
  if (err) {
    console.error('Error conectando a MySQL: ', err);
    return;
  }
  console.log('Conectado a MySQL');
});

app.get('/aprendices', (req, res) => {
  const sql = 'SELECT * FROM aprendices';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
