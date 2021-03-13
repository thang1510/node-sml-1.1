const express = require('express');

const ejsEngine = require('ejs-mate');
const app = express();
const portHome = 3000;
//const portNews = 1001;
//const portDetail = 1010;

app.set('view engine', 'ejs');
app.set('views', './views');

app.engine('ejs', ejsEngine);

app.use('/public', express.static('./public'));

app.get('/', (req, res) => {
  res.render('client/pages/index');
});
/*
app.get('/index', (req, res) => {
  res.render('client/index');
});
*/
app.get('/home', (req, res) => {
  res.render('client/pages/index.ejs');
});

app.get('/post', (req, res) => {
  res.render('client/pages/post.ejs');
});

app.get('/contact', (req, res) => {
  res.render('client/pages/contact.ejs');
});

app.get('/about', (req, res) => {
  res.render('client/pages/about.ejs');
})

app.listen(portHome, () => {
  console.log(`http://localhost:${portHome}`);
  //console.log('using \\news to go to news page');
})
