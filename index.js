const express = require('express');
const ejsEngine = require('ejs-mate');

const routes = require('./routes');  // go to the index file by default

const app = express();
const portHome = 3000;
//const portNews = 1001;
//const portDetail = 1010;

// init the app directory and engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.engine('ejs', ejsEngine);
app.use('/public', express.static('./public'));

// get the routes from the router
app.use(routes);


// cout that port was opened
app.listen(portHome, () => {
  console.log(`http://localhost:${portHome}`);
})
