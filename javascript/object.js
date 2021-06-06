var movieName = "avangers"
var movieLang = "English"
var movieRate = 4.2


var movieName = "jab we met"
var movieLang = "Hindi"
var movieRate = 4.8

var movies = {
    name:'Jab we met',
    rating:4.5,
    lang:'Hindi'
}
undefined
movies.name
"Jab we met"
movies.rating
4.5
movies.zoner="Romantic"
"Romantic"
movies
{name: "Jab we met", rating: 4.5, lang: "Hindi", zoner: "Romantic"}
movies.rating=4.6
4.6
movies
{name: "Jab we met", rating: 4.6, lang: "Hindi", zoner: "Romantic"}
delete movies.lang
true
movies
{name: "Jab we met", rating: 4.6, zoner: "Romantic"}



JSON
> JavaScript Object notation

var movies = [
    {
        name:'Jab we met',
        rating:4.5,
        lang:'Hindi'
    },
    {
        name:'Avengers',
        rating:4.2,
        lang:'English'
    }
]

movies[1].name
"Avengers"