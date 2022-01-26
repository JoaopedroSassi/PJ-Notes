const express = require('express');
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.engine('handlebars', engine())
app.set('view engine', 'handlebars');
app.use(express.static('public'));

//Routes
app.get('/', (req, res) => {
   res.render('home');
});

app.listen(port, () => {
   console.log(`Projeto rodando na porta ${port}`);
});