import React, { Component } from "react";
import "./movies.css";

import SearchBar from "../SearchBar/SearchBar";
import API from "../../utils/API";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.searchMovie = this.searchMovie.bind(this);
    }

    searchMovie = (searchTerm) => {
        API.searchMovies(searchTerm)
        .then(res => {
            console.log(res);
        })
    }

    render() {
        return(
            <div id="movies">
                <SearchBar searchtext="Search for a movie" search={this.searchMovie} />
            </div>
        )
    }
}

export default Movies;