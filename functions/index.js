const functions = require('firebase-functions');
const express = require('express');
const exphbs  = require('express-handlebars');
const fs = require('fs-extra');
const path = require('path');

const workboxModules = [
  {
    name: 'workbox-core',
  },
  {
    name: 'workbox-precaching',
    guide: 'https://docs.google.com/a/google.com/document/d/1lM_fVQZpohD8N1QLuxobmrYrq9lOJh4jYF3MJhNrMvs/edit?usp=sharing',
  },
  {
    name: 'workbox-routing',
  },
  {
    name: 'workbox-runtime-caching',
  },
  {
    name: 'workbox-background-sync',
  },
  {
    name: 'workbox-sw',
  },
];

// Has Docs
workboxModules.map((workboxModule) => {
  const docPath = path.join(
    __dirname, '..', 'public', 'reference-docs',
    `module-${workboxModule.name}.html`
  );
  let exists = false;
  try {
    fs.accessSync(docPath);
    exists = true;
  } catch(err) {}
  workboxModule.hasDocs = exists;
});

// Has Docs
workboxModules.map((workboxModule) => {
  const docPath = path.join(
    __dirname, 'views', 'demo', `${workboxModule.name}.hbs`
  );
  let exists = false;
  try {
    fs.accessSync(docPath);
    exists = true;
  } catch(err) {}
  workboxModule.hasDemo = exists;
});

const app = express();
app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('home', {
    title: 'Workbox V3',
    modules: workboxModules,
  });
});

app.get('/demo/:moduleName', function (req, res) {
  res.render(`demo/${req.params.moduleName}`, {
    title: `${req.params.moduleName} Demo`,
    modules: workboxModules,
  });
});

module.exports = {
  app: functions.https.onRequest(app)
};
