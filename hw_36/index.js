// C массивом фильмов сделать следующий задачи, используя map/reduce вместо for,
// forEach:

const films = [
  {
    id: 1,
    title: "Black Widow",
    year: 2021,
    released: "09 Jul 2021",
    runtime: "134 min",
    genre: ["Action", "Sci-Fi", "Adventure"],
    director: "Cate Shortland",
    writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
    actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
    plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
    country: "United States",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    imdbRating: 6.9,
    imdbVotes: 121932,
    type: "movie",
    boxOffice: "$138,027,361",
    production: "Marvel Studios",
  },
  {
    id: 2,
    title: "Harry Potter and the Deathly Hallows: Part 2",
    year: 2011,
    released: "15 Jul 2011",
    runtime: "130 min",
    genre: ["Adventure", "Drama", "Fantasy"],
    director: "David Yates",
    writer: "Steve Kloves, J.K. Rowling",
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    country: "United Kingdom, United States",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    imdbRating: 8.1,
    imdbVotes: 790377,
    type: "movie",
    boxOffice: "$381,409,310",
    production: "Heyday Films, Moving Picture Company, Warner Bros.",
  },
  {
    id: 3,
    title: "Star Wars",
    year: 1977,
    released: "25 May 1977",
    runtime: "121 min",
    genre: ["Action", "Adventure", "Fantasy"],
    director: "George Lucas",
    writer: "George Lucas",
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad",
    country: "United States, United Kingdom",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    imdbRating: 8.6,
    imdbVotes: 1259440,
    type: "movie",
    boxOffice: "$460,998,507",
    production: "Lucasfilm Ltd.",
  },
  {
    id: 4,
    title: "Harry Potter and the Half-Blood Prince",
    year: 2009,
    released: "15 Jul 2009",
    runtime: "153 min",
    genre: ["Action", "Adventure", "Family"],
    director: "David Yates",
    writer: "Steve Kloves, J.K. Rowling",
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    plot: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as 'the property of the Half-Blood Prince' and begins to learn more about Lord Voldemort's dark past.",
    country: "United Kingdom",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
    imdbRating: 7.6,
    imdbVotes: 492245,
    boxOffice: "$302,305,431",
    production: "Heyday Films, Warner Bros.",
  },
  {
    id: 5,
    title: "Harry Potter and the Sorcerer's Stone",
    year: 2001,
    released: "16 Nov 2001",
    runtime: "152 min",
    genre: ["Adventure", "Family", "Fantasy"],
    director: "Chris Columbus",
    writer: "J.K. Rowling, Steve Kloves",
    actors: ["Daniel Radcliffe", "Rupert Grint", "Richard Harris"],
    plot: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
    country: "United Kingdom, United States",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    imdbRating: 7.6,
    imdbVotes: 684604,
    boxOffice: "$318,087,620",
    production: "1492 Pictures, Heyday Films, Warner Brothers",
  },
];

//-------------------------------------------------------
// 1. Собрать в массив все жанры фильмов (без повторения)
//-------------------------------------------------------

const getUniqueGenreOfMovies = (films) => {
  const allGenres = films.reduce((result, { genre }) => {
    return result.concat(genre);
  }, []);

  const uniqueMoviesSet = new Set(allGenres);
  // console.log(uniqueMoviesSet);

  return Array.from(uniqueMoviesSet).sort();
};

const uniqueGenreOfMovies = getUniqueGenreOfMovies(films);
console.log(uniqueGenreOfMovies);

//---------------------------------------------------------------
// 2. Собрать в массив всех актеров всех фильмов (без повторения)
//---------------------------------------------------------------

const getUniqueActorsList = (films) => {
  const allActors = films.reduce((result, { actors }) => {
    return result.concat(actors);
  }, []);

  const uniqueActorsSet = new Set(allActors);
  // console.log(uniqueActorsSet);

  return Array.from(uniqueActorsSet).sort();
};

const uniqueActorsList = getUniqueActorsList(films);
console.log(uniqueActorsList);

//----------------------------------------------
// 3. Сортировать фильмы по рейтингу по убыванию
//----------------------------------------------

const sortOfMoviesByImdbRating = (films) => {
  const copyOfMovies = [...films];
  const SortedRating = copyOfMovies.sort((a, b) => b.imdbRating - a.imdbRating);

  return SortedRating;
};

const sortedMoviesByImdbRating = sortOfMoviesByImdbRating(films);
console.log(sortedMoviesByImdbRating);

//-------------------------------------------------------------------------
// 4. Создать новый массив, где объекты фильмов будут состоять из следующих
// полей:
// id, title, released, plot
//-------------------------------------------------------------------------

const createNewArrayOfMovies = (films) => {
  return films.map(({ id, title, released, plot }) => ({
    id,
    title,
    released,
    plot,
  }));
};

const newArrayOfMovies = createNewArrayOfMovies(films);
console.log(newArrayOfMovies);

//-----------------------------------------------------------------
// 5. Создать функцию, которая бы принимала массив фильмов и число.
// А результатом этой функции должен быть отфильтрованный массив
//с фильмами, где число равно году выхода фильма.
//-----------------------------------------------------------------

const getMoviesByYear = (films, yearOfMovie) => {
  return films.filter(({ year }) => year === yearOfMovie);
};

const moviesByYear = getMoviesByYear(films, 2021);
console.log(moviesByYear);

//--------------------------------------------------------------------
// 6. Создать функцию, которая бы принимала массив фильмов и строку.
// А результатом этой функции должен быть новый отфильтрованный массив,
// с фильмами, где строка входит в название фильма.
//--------------------------------------------------------------------

const getMovieByName = (films, string) => {
  return films.filter(({ title }) =>
    title.toLowerCase().includes(string.toLowerCase())
  );
};

const moviesByName = getMovieByName(films, "Harry");
console.log(moviesByName);

//---------------------------------------------------------------------
// 7. Создать функцию, которая бы принимала массив фильмов и строку.
// А результатом этой функции должен быть отфильтрованный массив,
// с фильмами, где строка входит в название фильма или в его сюжет.
//---------------------------------------------------------------------

const getMovieByNameOrByplot = (films, string) => {
  return films.filter(({ title, plot }) => {
    const lowerCasedString = string.toLowerCase();

    return (
      title.toLowerCase().includes(lowerCasedString) ||
      plot.toLowerCase().includes(lowerCasedString)
    );
  });
};

const moviesByNameOrByplot = getMovieByNameOrByplot(
  films,
  "As Harry Potter begins his sixth year"
);
console.log(moviesByNameOrByplot);

// 8. Создать функцию, которая бы принимала 3 параметра: 1)массив фильмов , 2)
// строка(название поля, например 'title') и строку/число(значение поля "Black
// Widow"). А результатом этой функции должен быть отфильтрованный массив,
// где параметры 2 и 3 равны в объекте фильма. Например: передаем (films, 'title',
// 'Black Widow') и на выходе получаем фильм с id=1 если передаем (films, 'year',
// 2011) , то получаем фильм с id=2

const getMovie = (films, name, value) => {
  return films.filter((film) => film[name] == value);
};

const movies = getMovie(films, "year", 2001);

console.log(movies);

//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------

class Movies {
  constructor(films) {
    this.films = films;
  }

  getUniqueGenreOfMovies() {
    const allGenres = this.films.reduce((result, { genre }) => {
      return result.concat(genre);
    }, []);
    
    const uniqueMoviesSet = new Set(allGenres);
    return Array.from(uniqueMoviesSet).sort();
  }

  getUniqueActorsList() {
    const allActors = this.films.reduce((result, { actors }) => {
      return result.concat(actors);
    }, []);

    const uniqueActorsSet = new Set(allActors);
    return Array.from(uniqueActorsSet).sort();
  }

  sortOfMoviesByImdbRating() {
    return this.films.slice().sort((a, b) => b.imdbRating - a.imdbRating);
  }

  createNewArrayOfMovies() {
    return this.films.map(({ id, title, released, plot }) => ({
      id,
      title,
      released,
      plot,
    }));
  }

  getMoviesByYear(yearOfMovie) {
    return this.films.filter(({ year }) => year === yearOfMovie);
  }

  getMovieByName(string) {
    return this.films.filter(({ title }) =>
      title.toLowerCase().includes(string.toLowerCase())
    );
  }

  getMovieByNameOrByplot(string) {
    return this.films.filter(({ title, plot }) => {
      const lowerCasedString = string.toLowerCase();

      return (
        title.toLowerCase().includes(lowerCasedString) ||
        plot.toLowerCase().includes(lowerCasedString)
      );
    });
  }

  getMovie(name, value) {
    return this.films.filter((film) => film[name] == value);
  }
}

const moviesData = new Movies(films);

const uniqueGenreOfMovies1 = moviesData.getUniqueGenreOfMovies();
console.log(uniqueGenreOfMovies1);

const uniqueActorsList1 = moviesData.getUniqueActorsList();
console.log(uniqueActorsList1);

const sortedMoviesByImdbRating1 = moviesData.sortOfMoviesByImdbRating();
console.log(sortedMoviesByImdbRating1);

const newArrayOfMovies1 = moviesData.createNewArrayOfMovies();
console.log(newArrayOfMovies1);

const moviesByYear1 = moviesData.getMoviesByYear(2021);
console.log(moviesByYear1);

const moviesByName1 = moviesData.getMovieByName("Harry");
console.log(moviesByName1);

const moviesByNameOrByplot1 = moviesData.getMovieByNameOrByplot("As Harry Potter begins his sixth year");
console.log(moviesByNameOrByplot1);

const movies1 = moviesData.getMovie("year", 2001);
console.log(movies1);
