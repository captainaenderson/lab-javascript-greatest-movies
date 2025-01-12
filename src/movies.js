// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((movies) => {
        return movies.director;
    });
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      }
    const dramaMovies = moviesArray.filter ((movies) => {
       return (movies.director === "Steven Spielberg" && movies.genre.includes("Drama"))
    })
    return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) return 0;
    const averageScore = moviesArray.reduce ((accumulator, movies) => {
        if(!movies.score){
            return accumulator;
        } 
        return accumulator + movies.score;
        
    },0)
    return Math.round((averageScore / moviesArray.length)*100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) return 0;
        
      
    const dramaAverage = moviesArray.reduce ((acc, curr) => {
        if(curr.score && curr.genre.includes("Drama")){
            return acc + curr.score;
        }
        return acc;
    }, 0)
    return Math.round((dramaAverage / moviesArray.length)* 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      }
      const NewOrderYear = moviesArray.sort((a, b) => {
        if (a.year === b.year) {
          return a.title > b.title ? 1 : -1;
        }
        return a.year - b.year;
      });
      return NewOrderYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
   
    const sortedMovies = moviesArray.slice().sort((a, b) => a.title.localeCompare(b.title));

  const titles = sortedMovies.map(movie => movie.title).slice(0, 20);

  return titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
