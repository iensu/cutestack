'use strict';

const express = require('express');
const path = require('path');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

const server = app.listen(port, () => {
  console.log(`Cutestack server up and running at http://${host}:${port}!`)
});
