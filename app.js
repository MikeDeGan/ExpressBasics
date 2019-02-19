const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log('This always runs');
  next();
});

app.use('/users', (req, res, next) => {
  console.log('This will return a list of users');
  res.send('<h1>Hello</h1>');
});

app.use('/', (req, res, next) => {
  console.log('This will not return a list of users');
  res.send('<h1>Hello from the bottom</h1>');
});

app.listen(3000);
