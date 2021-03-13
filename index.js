const express = require('express');
const app = express();
const portHome = 3000;
//const portNews = 1001;
//const portDetail = 1010;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/public', express.static('./public'));


app.get('/', (req, res) => {
  res.render('client/index');
})

app.listen(portHome, () => {
  console.log(`http://localhost:${portHome}`);
  //console.log('using \\news to go to news page');
})
