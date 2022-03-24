const express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  uuid = require('uuid');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to my app!');
});

let users = [
  {
    id: 1,
    name: "Bob",
    favoriteMovies: []
  },
  {
    id: 2,
    name: "Stephanie",
    favoriteMovies: ["The Shawshank Redemption"]
  }
]

let movies = [
  {
    "title": "The Shawshank Redemption",
    "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "director": {
      "name": "Frank Darabont",
      "bio": "Three-time Oscar nominee Frank Darabont was born in a refugee camp in 1959 in Montbeliard, France, the son of Hungarian parents who had fled Budapest during the failed 1956 Hungarian revolution.",
      "birth": "January 28, 1959"
    },
    "genre": {
      "name": "Drama",
      "description": "The drama genre features stories with high stakes and a lot of conflicts."
    }
  },
  {
    "title": "Lord of the Rings Trilogy",
    "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "director": {
      "name": "Peter Jackson",
      "bio": "Peter Jackson started his prolific career as a child, creating short films with a 8-mm movie camera. Without any formal training, Jackson has directed a number of successful films ranging across all genres. ",
      "birth": "October 31, 1961"
    },
    "genre": {
      "name": "Drama/Action/Adventure",
      "description":  "Films in the adventure genre usually contain the same basic genre elements of an action movie with the setting as the key difference."
    }
  },
  {
    "title": "The Dark Knight",
    "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    "director": {
      "name": "Christopher Nolan",
      "bio": "Christopher Nolan is a British film director and writer acclaimed for his noirish visual aesthetic and unconventional, often highly conceptual narratives.",
      "birth": "July 30, 1970"
    },
    "genre": {
      "name": "Drama/Action/Crime",
      "description": "Crime drama is a sub-genre of drama that focuses on crimes, the criminals that commit them and the police that catch them."
    }
  },
  {
    "title": "Schindler\'s List",
    "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    "director": {
      "name": "Steven Spielberg",
      "bio": "Steven Spielberg was an amateur filmmaker as a child. He went on to become the enormously successful and Academy Award-winning director of such films as Schindler's List, The Color Purple, E.T.: The Extra-Terrestrial, Saving Private Ryan, Catch Me If You Can, Lincoln and Bridge of Spies. In 1994, he co-founded the studio Dreamworks SKG, which was purchased by Paramount Pictures in 2005.",
      "birth": "December 18, 1946"
    },
    "genre": {
      "name": "Drama/Biography/History",
      "description": "A Biography drama incorporates dramatic elements into a biographical film. These films differ from Historical and “based in truth” films because they specifically chronicle the life of a person or a group of people."
    }
  },
  {
    "title": "The Godfather",
    "description": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    "director": {
      "name": "Francis Ford Coppola",
      "bio": "Coppola was born in Detroit, Michigan. Stricken with polio as a child, he was bedridden and found creative ways to entertain himself, including producing his own puppet shows. Coppola developed an interest in film early on and studied theater at Hofstra University in New York.",
      "birth": "April 7, 1939"
    },
    "genre": {
      "name": "Drama/Crime",
      "description": "Crime drama is a sub-genre of drama that focuses on crimes, the criminals that commit them and the police that catch them."
    }
  },
  {
    "title": "The Pianist",
    "description": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    "director": {
      "name": "Roman Polanski",
      "bio": "Raimund Polanski was born in Paris, France. At the age of three, he moved with his family to his father's native city of Krakow, Poland. In 1941, his parents were imprisoned in various Nazi concentration camps, leading to his mother's death in Auschwitz.",
      "birth": "August 18, 1933"
    },
    "genre": {
      "name": "Drama/Biography/Music",
      "description": "The drama genre features stories with high stakes and a lot of conflicts."
    }
  },
  {
    "title": "se7en",
    "description": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    "director": {
      "name": "David Fincher",
      "bio": "David Fincher was born in Denver, Colorado, and was raised in Marin County, California. When he was 18 years old he went to work for John Korty at Korty Films in Mill Valley. He subsequently worked at ILM (Industrial Light and Magic) from 1981-1983.",
      "birth": "August 28, 1962"
    },
    "genre": {
      "name": "Drama/Crime/Mystery",
      "description": "Crime drama is a sub-genre of drama that focuses on crimes, the criminals that commit them and the police that catch them."
    }
  },
  {
    "title": "12 Angry Men",
    "description": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
    "director": {
      "name": "Sidney Lumet",
      "bio": "Sidney Lumet, American director who was noted for his psychological dramas, which typically featured characters wrestling with moral or emotional conflicts involving betrayal, corruption, or disillusionment.",
      "birth": "June 25, 1924"
    },
    "genre": {
      "name": "Drama/Crime",
      "description": "Crime drama is a sub-genre of drama that focuses on crimes, the criminals that commit them and the police that catch them."
    }
  },
  {
    "title": "Saving Ptivate Ryan",
    "description": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    "director": {
      "name": "Steven Spielberg",
      "bio": "Steven Spielberg was an amateur filmmaker as a child. He went on to become the enormously successful and Academy Award-winning director of such films as Schindler's List, The Color Purple, E.T.: The Extra-Terrestrial, Saving Private Ryan, Catch Me If You Can, Lincoln and Bridge of Spies. In 1994, he co-founded the studio Dreamworks SKG, which was purchased by Paramount Pictures in 2005.",
      "birth": "December 18, 1946"
    },
    "genre": {
      "name": "Drama/War",
      "description": "War film is a film genre concerned with warfare, typically about naval, air, or land battles, with combat scenes central to the drama."
    }
  },
  {
    "title": "Interstellar",
    "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "director": {
      "name": "Christopher Nolan",
      "bio": "Christopher Nolan is a British film director and writer acclaimed for his noirish visual aesthetic and unconventional, often highly conceptual narratives.",
      "birth": "July 30, 1970"
    },
    "genre": {
      "name": "Drama/Sci-Fi/Adventure",
      "description": "Science fiction (or sci-fi) is a film genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science, such as extraterrestrial lifeforms, spacecraft, robots, cyborgs, interstellar travel or other technologies."
    }
  }
];

//CREATE
app.post('/users', (req, res) => {
  const newUser = req.body;

  if (newUser.name) {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).json(newUser)
  } else {
    res.status(400).send('users need names')
  }
});



//UPDATE
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  let user = users.find( user => user.id == id );

  if (user) {
    user.name = updatedUser.name;
    res.status(200).json(user);
  } else {
    res.status(400).send('no such user')
  }
});

//CREATE
app.post('/users/:id/:movieTitle', (req, res) => {
  const { id, movieTitle } = req.params;

  let user = users.find( user => user.id == id );

  if (user) {
    user.favoriteMovies.push(movieTitle);
    res.status(200).send( 'A new movie has been added');
  } else {
    res.status(400).send('no such user')
  }
});

//DELETE
app.delete('/users/:id/:movieTitle', (req, res) => {
  const { id, movieTitle } = req.params;

  let user = users.find( user => user.id == id );

  if (user) {
    user.favoriteMovies = user.favoriteMovies.filter( title => title !== movieTitle);
    res.status(200).send( 'A movie has been removed');
  } else {
    res.status(400).send('no such user')
  }
});

//DELETE
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  let user = users.find( user => user.id == id );

  if (user) {
    users = users.filter( user => user.id != id);
    res.status(200).send( 'User ID has been deleted');
  } else {
    res.status(400).send('no such user')
  }
});

//READ
app.get('/movies', (req, res) => {
  res.status(200).json(movies);
});

app.get('/movies/:title', (req, res) => {
  const { title } = req.params
  const movie = movies.find( movie => movie.title === title);

  if (movie) {
    res.status(200).json(movie);
  } else {
      res.status(400).send('no such movie')
  }
});

app.get('/movies/genre/:genreName', (req, res) => {
  const { genreName } = req.params
  const genre = movies.find( movie => movie.genre.name === genreName).genre;

  if (genre) {
    res.status(200).json(genre);
  } else {
      res.status(400).send('no such genre')
  }
});

app.get('/movies/directors/:directorName', (req, res) => {
  const { directorName } = req.params;
  const director = movies.find( movie => movie.director.name === directorName).director;

  if (director) {
    res.status(200).json(director);
  } else {
      res.status(400).send('no such director')
  }
});

app.use('/documentation', express.static('public'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080,');
});
