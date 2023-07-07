const express = require('express');
const path = require('path');

const app = express();
const port = 9000;

app.use(express.static(path.join(__dirname)));

app.get('/hive', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/adn-tech', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/general-energy', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
app.get('/charge-back', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

app.get('/giusoft', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

app.get('/lactec', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});