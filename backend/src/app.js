const express = require('express');
const setupAdminJs = require('../adminjs/index');
const userRouter = require('../routes/user');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Express is running as expected.');
});

app.use(userRouter)

setupAdminJs(app);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    error: 'Unexpected condition made it impossible to complete the request.',
  });
});

module.exports = app;
