const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();
// permite que envie dados para app no formato json
app.use(express.json());
// libera acesso para todos os dominios
app.use(cors());

// iniciando o db
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

requireDir('./src/models');


// o 'use" vai receber todo tipo de requisição e mandar pro arquivo routes
app.use("/api", require("./src/routes"));

// ouvir a porta 3001 do navegador
app.listen(3001);   