// Get the API key.
const API_KEY = "f77b2e32ff7f38f64382ba493050a66b";

// Deffine a bunch of generic requests.
const requests = {

    fetchTrending : `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,
    fetchTopRated : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&without_genres=10402`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&without_genres=35,99,28`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&without_genres=27,12,18`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&without_genres=80,18`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&without_genres=99,18`,

}

//  Export the requests.
export default requests;