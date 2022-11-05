import axios from 'axios';
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "b3f9afca16a4955ec4fa9a455f1a40de";

const fetchMoviesInTrend = async () => {
    const response = await axios.get(`trending/all/day?api_key=${API_KEY}`);
    const movies = response.data;
    return movies;
};

const fetchMoviesDetails = async (id) => {
    const response = await axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);
    const movie = response.data;
    return movie;
};

const fetchMovieCredits = async (id) => {
    const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
    const credits = response.data;
    return credits;
};

const fetchMovieReviews = async (id) => {
    const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    const reviews = response.data;
    return reviews;
};

const fetchMovies = async (searchQuery) => {
    const response = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`);
    const movies = response.data;
    return movies;
};


const api = {
    fetchMoviesInTrend,
    fetchMoviesDetails,
    fetchMovieCredits,
    fetchMovieReviews,
    fetchMovies
};

export default api;
 