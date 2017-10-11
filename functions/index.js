const functions = require('firebase-functions');
const express = require('express');
const exphbs  = require('express-handlebars');

const modules = [
  {name: 'workbox-core'},
  {name: 'workbox-precaching'},
  {name: 'workbox-sw'},
  {name: 'workbox-routing'},
];

const app = express();
app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('home', {
    title: 'Workbox V3',
    modules,
  });
});

app.get('/demo/:moduleName', function (req, res) {
  res.render(`demo/${req.params.moduleName}`, {
    title: `${req.params.moduleName} Demo`,
    modules,
  });
});

module.exports = {
  app: functions.https.onRequest(app)
};
