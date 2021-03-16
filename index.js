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
  let posts = [{
    title: "One Piece",
    description: "Manga",
    author: "Eiichiro Oda",
    date: "March 16, 2021"
  },
  {
    title: "Attack on Titan",
    description: "Manga",
    author: "Hajime Isayama",
    date: "March 16, 2021"
  },
  {
    title: "Dragon Ball",
    description: "Manga ",
    author: "Akira Toriyama",
    date: "March 16, 2021"
  }
];
  res.render('client/pages/index', {posts:posts});
});

app.get('/home', (req, res) => {
  let posts = [{
    title: "One Piece",
    description: "Manga",
    author: "Eiichiro Oda",
    date: "March 16, 2021"
  },
  {
    title: "Attack on Titan",
    description: "Manga",
    author: "Hajime Isayama",
    date: "March 16, 2021"
  },
  {
    title: "Dragon Ball",
    description: "Manga ",
    author: "Akira Toriyama",
    date: "March 16, 2021"
  }
];
  res.render('client/pages/index', {posts:posts});
});

app.get('/post', (req, res) => {
  let heading = "UwU";
  let quote   = "\"ah I see, you are a man of culture as well\"";
  let content = "nothing to see here";
  res.render('client/pages/post.ejs', {
    heading : heading,
    quote : quote,
    content : content
  });
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
