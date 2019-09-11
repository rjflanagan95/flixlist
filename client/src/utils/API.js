import axios from "axios";

export default {
    searchMovies: function() {
        return axios.get("/api/movies");
    }
}