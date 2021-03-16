const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
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

router.get('/home', (req, res) => {
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

router.get('/post', (req, res) => {
  let heading = "UwU";
  let quote   = "\"ah I see, you are a man of culture as well\"";
  let content = "nothing to see here";
  res.render('client/pages/post.ejs', {
    heading : heading,
    quote : quote,
    content : content
  });
});

router.get('/contact', (req, res) => {
  res.render('client/pages/contact.ejs');
});

router.get('/about', (req, res) => {
  res.render('client/pages/about.ejs');
})


// release the ROUTER
module.exports = router;
