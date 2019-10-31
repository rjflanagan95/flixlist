import React, { Component } from "react";
import "./TV.css";

import SearchBar from "../SearchBar/SearchBar";
import ResultsArea from "../ResultsArea/ResultsArea";
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
                <ResultsArea searchResults={this.state.searchResults} contentType="tv"/>
            </div>
        )
    }
}

export default TV;