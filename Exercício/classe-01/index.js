// const express = require('express');
// const routes = require('./routes/rotas');

// const app = express();
// app.use(express.json());

// app.use(routes);

// app.listen(8000);

const express = require("express");
const routes = require('./routes/rotas');

const app = express();
app.use(express.json());
app.use(routes);

app.listen(8000);