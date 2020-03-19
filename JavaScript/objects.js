var movieDB = [
	{title: "The Shawshank Redemption", rating: 9.2, hasWatched: true},
	{title: "The Godfather", rating: 9.1, hasWatched: false},
	{title: "The Dark Knight", rating: 9.0, hasWatched: true},
	{title: "12 Angry Men", rating: 8.9, hasWatched: true},
	{title: "Schindler's List", rating: 8.9, hasWatched: false}
]

movieDB.forEach(function(movie){
	var hasWatchedText;
	if(movie.hasWatched === true) hasWatchedText = "You have watched ";
	else if(movie.hasWatched === false) hasWatchedText = "You have not seen ";
	console.log(hasWatchedText + "\"" + movie.title + "\" - " + movie.rating + " stars" );
});