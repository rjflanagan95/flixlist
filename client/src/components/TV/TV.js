import React, { Component } from "react";
import "./TV.css";

import SearchBar from "../SearchBar/SearchBar";

class TV extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div id="television">
                <SearchBar searchtext="Search for a TV show" />
            </div>
        )
    }
}

export default TV;