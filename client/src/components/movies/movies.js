import React, { Component } from "react";
import "./movies.css";

import SearchBar from "../SearchBar/SearchBar";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div id="movies">
                <SearchBar searchtext="Search for a movie" />
            </div>
        )
    }
}

export default Movies;