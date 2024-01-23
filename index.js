// index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Ini End Point GET pak sesuai dengan url / port http://localhost:3000/');
});

app.get('/api/data', (req, res) => {
  const data = {
    message: 'Kalo yang ini GET data pak sesuai dengan url / port http://localhost:3000/api/data ',
    timestamp: new Date()
  };

  res.json(data);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
