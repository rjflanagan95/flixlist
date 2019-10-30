import React, { Component } from "react";
import "./movies.css";

import SearchBar from "../SearchBar/SearchBar";
import ResultsArea from "../ResultsArea/ResultsArea";
import API from "../../utils/API";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: []
        }

        this.searchMovie = this.searchMovie.bind(this);
    }

    searchMovie = (searchTerm) => {
        API.searchMovies(searchTerm)
        .then(res => {
            this.setState({
                searchResults: res.data.results
            });
        })
    }

    render() {
        return(
            <div id="movies">
                <SearchBar searchtext="Search for a movie" search={this.searchMovie} />
                <ResultsArea searchResults={this.state.searchResults} contentType="movie" />
            </div>
        )
    }
}

export default Movies;