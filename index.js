const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

//Routes
app.get('/', (req, res) => {
   res.send("App ta funcionando!");
});

app.listen(port, () => {
   console.log(`Projeto rodando na porta ${port}`);
});