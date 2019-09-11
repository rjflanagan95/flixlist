import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.sendSearch = this.sendSearch.bind(this);
    }

    handleChange(target) {
        this.setState({
            [target.name]: target.value
        });
    }

    sendSearch() {
        let searchTerm = this.state.searchTerm;
        searchTerm = searchTerm.trim();
        searchTerm = searchTerm.split(" ").join("+");
        this.props.search(searchTerm);
    }

    render() {
        return(
            <div id="search-row">
                <input id="search-bar" type="text" name="searchTerm" placeholder={this.props.searchtext} onChange={(e) => this.handleChange(e.target)} />
                <button id="search-button" onClick={this.sendSearch}>&rarr;</button>
            </div>
        )
    }
}

export default SearchBar;