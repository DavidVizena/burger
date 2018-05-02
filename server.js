var express = require('express'),
    bodyParser = require('body-parser'),
    exphbs = require('express-handlebars'),
    path = require('path'),
    methodOverride = require('method-override'),
    dotenv = require('dotenv').config(),

    app = express(),
    public = require('path').join(__dirname, '/public');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(public));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

var routes = require('./controllers/burgers_controller');

var PORT = process.env.PORT || 3000;

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

