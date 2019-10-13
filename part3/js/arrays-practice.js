/*eslint-env browser*/

//STEP 1
var str = ["Avengers", "Deadpool", "Inception", "Spiderman", "Joker"];
window.console.log("Second entry in my array: " + str[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "Gravity";
movies[1] = "Ghostbusters";
movies[2] = "Avatar";
movies[3] = "Gladiator";
movies[4] = "Interstellar";
window.console.log("First movie in the array: " + movies[0]);

//STEP 3
var addmovie = movies;
addmovie.splice(2, 0, "Jaws");
window.console.log("Length of movie array is now: " + addmovie.length);

//STEP 4
var movie = ["Wall-E", "Rango", "Coco", "Cars", "Up"];
window.console.log("Array before deletion: " + movie);
delete movie[0];
window.console.log("Array after deletion: " + movie);

//STEP 5
var movie = ["Wall-E", "Rango", "Coco", "Cars", "Up", "Casper", "The Good Dinosaur"];
var i;
window.console.log("List of movies using for loop:");
for (i = 0; i < movie.length; i += 1) {
    window.console.log(movie[i]);
}

//STEP 6
var movielist = movie;
window.console.log("List of movies using for-in :");
for (i in movielist) {
    window.console.log(movielist[i]);
}

//STEP 7
window.console.log("List of movies sorted :");
movielist.sort();
for (i in movielist) {
    window.console.log(movielist[i]);
}

//STEP 8
var leastFavMovies = ["Cleopatra", "The Artist", "Seven years in Tibet"];

window.console.log("Movies I like:\n\n");
for (i in movie) {
    window.console.log(movie[i]);
}
window.console.log("\n\n");

window.console.log("Movies I regret watching:\n\n");
for (i in leastFavMovies) {
    window.console.log(leastFavMovies[i]);
}

//STEP 9
var movieList = movie.concat(leastFavMovies);
movieList.sort();
movieList.reverse();
window.console.log("\n\nReverse list:");
for (i = 0; i < movieList.length; i += 1) {
    window.console.log(movieList[i]);
}

//STEP 10
var len = movieList.length;
window.console.log("\nLast item in array is: ");
window.console.log(movieList[len - 1]);