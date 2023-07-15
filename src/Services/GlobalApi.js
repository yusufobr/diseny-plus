import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "e56f775044f39049b65080889a4a0b2d";

export const getTrendingVideos = axios.get( movieBaseUrl + '/trending/all/day?api_key=' + api_key);
export const getMovieByGenreId = (id) => axios.get( movieBaseUrl+ "/discover/movie?api_key=" + api_key + "&with_genres=" + id );

