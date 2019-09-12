import React, { Component } from "react";
import "./movies.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";
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
                <div className="results-area">
                    {this.state.searchResults.map((movie, resultIndex) =>
                        <SearchResult key={resultIndex} content={movie} />
                    )}
                </div>
            </div>
        )
    }
}

export default Movies;