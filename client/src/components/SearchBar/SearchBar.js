import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div id="search-row">
                <input id="search-bar" type="text" placeholder={this.props.searchtext} />
                <button id="search-button">&rarr;</button>
            </div>
        )
    }
}

export default SearchBar;