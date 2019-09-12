import React, { Component } from "react";
import "./TV.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";
import API from "../../utils/API";

class TV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: []
        }

        this.searchTV = this.searchTV.bind(this);
    }

    searchTV = (searchTerm) => {
        API.searchTV(searchTerm)
        .then(res => {
            this.setState({
                searchResults: res.data.results
            });
        })
    }

    render() {
        return(
            <div id="television">
                <SearchBar searchtext="Search for a TV show" search={this.searchTV} />
                <div className="results-area">
                    {this.state.searchResults.map((tvShow, resultIndex) =>
                        <SearchResult key={resultIndex} content={tvShow} contentType="tv"/>
                    )}
                </div>
            </div>
        )
    }
}

export default TV;