import axios from "axios";

export default {
    searchMovies: function(searchTerm) {
        return axios.put("/api/movies", {
            query: searchTerm
        });
    }
}