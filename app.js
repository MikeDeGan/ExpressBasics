const path = require('path');
const express = require('express');
// const rootDir = require('./utils/path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'users.html'));
});

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use('/', (req, res, next) => {
  res.status(404).send('<h1>Nope</h1>');
});
app.listen(3000);
