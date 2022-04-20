# filmBuff
###Are you film buff looking for an all-in-one app that has everything you could possibly need to know about movies? Well, look no further because our FilmBuff app will satify all of your curiosities.
###Search through our immense film database and find everything thing there is to know about any particular movie.

##The List Goes On:
- Find out which actors star in which movies
- Explore the bios of the actors
- View more release date and movie ratings
- Create your own 'To Watch' and 'Favorite Movies' list

##Download and sign up through our 'FilmBuff' app today to become apart of the our many film enthusiasts!

##Endpoints

###GET-Return a list of ALL movies to the user: /movies
###GET-Return data (description, genre, director, image URL, whether it’s featured or not) about a single movie by title to the user: /movies/:title
###GET-Return data about a genre (description) by name/title (e.g., “Thriller”): /movies/genre/:genre
###GET-Return data about a director (bio, birth year, death year) by name: /movies/directors/:director
###POST-Allow new users to register: /users
###POST- Allow users to login to their account: /login
###POST-Allow users to add a movie to their list of favorites: /users/:username/movies/:movieID
###PUT-Allow users to update their user info (username): /users/:id
###DELETE-Allow users to remove a movie from their list of favorites: /users/:username/:movieID
###DELETE-Allow existing users to deregister: /users/:id
