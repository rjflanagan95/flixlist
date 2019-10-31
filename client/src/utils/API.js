import axios from "axios";

export default {
    searchMovies: function(searchTerm) {
        return axios.put("/api/movies", {
            query: searchTerm
        });
    },

    searchTV: function(searchTerm) {
        return axios.put("/api/tv", {
            query: searchTerm
        });
    },

    // getTrailer: function(movieID) {
    //     return axios.put("/api/movies/trailers", {
    //         query: movieID
    //     });
    // }
}