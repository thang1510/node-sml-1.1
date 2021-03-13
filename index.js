const express = require('express');
const app = express();
const portHome = 3000;
//const portNews = 1001;
//const portDetail = 1010;

app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', (req, res) => {
  res.send('Homepage <br />'+
  '<a href="/uwu" onclick=>click me</a> <br />' +
  '<a href="/test" onclick=>testing</a> <br />');
})

app.get('/uwu', (req, res) => {
    res.send(' <a href="/" onclick=>click me</a>');
})

app.get('/test', function(req, res) {
    res.sendFile('/index.html', {root: __dirname });
    //res.send(' <a href="/" onclick=>click me</a>');
});

app.listen(portHome, () => {
  console.log(`http://localhost:${portHome}`);
  console.log('using \\news to go to news page');
})
