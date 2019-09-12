import React, { Component } from "react";
import "./SearchResult.css";

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <div className="search-result">
                <span>{this.props.content.title}</span>
                <div>{this.props.content.overview}</div>
            </div>
        )
    }
}

export default SearchResult;