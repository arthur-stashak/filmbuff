const express = require('express'),
  morgan = require('morgan');

const app = express();

app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('Welcome to my app!');
});

let topMovies = [
  {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont'
  },
  {
    title: 'Lord of the Rings Trilogy',
    director: 'Peter Jackson'

  },
  {
    title: 'The Dark Knight',
    author: 'Christopher Nolan'
  },
  {
    title: 'Schindler\'s List',
    director: 'Steven Spielberg'
  },
  {
    title: 'The Godfather',
    director: 'Francis Ford Coppola'

  },
  {
    title: 'The Pianist',
    author: 'Roman Polanski'
  },
  {
    title: 'se7en',
    author: 'David Fincher'
  },
  {
    title: '12 Angry Men',
    director: 'Sidney Lumet'
  },
  {
    title: 'Saving Ptivate Ryan',
    director: 'Steven Spielberg'

  },
  {
    title: 'Interstellar',
    author: 'Christopher Nolan'
  }
];

app.get('/movies', (req, res) => {
  res.json(topmovies);
});

app.use('/documentation', express.static('public'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Your app is listening o port 8080,');
});
