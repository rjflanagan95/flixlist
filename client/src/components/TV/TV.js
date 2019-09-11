import React, { Component } from "react";
import "./TV.css";

import SearchBar from "../SearchBar/SearchBar";

class TV extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.searchTV = this.searchTV.bind(this);
    }

    searchTV = (searchTerm) => {
        console.log(searchTerm);
    }

    render() {
        return(
            <div id="television">
                <SearchBar searchtext="Search for a TV show" search={this.searchTV} />
            </div>
        )
    }
}

export default TV;