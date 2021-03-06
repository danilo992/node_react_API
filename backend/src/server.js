const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-au39i.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//GET, POST, PUT, DELETE

//POST rer.quey = Acessar query params
//PUT req.params = Acessar rout params (para edição, delete)
//POST => JSON req.body = Acessar corpo da requisição (para criação, edição)

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333);