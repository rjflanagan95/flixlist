import React, { Component } from "react";
import "./ResultsArea.css";
// import API from "../../utils/API";

import SearchResult from "../SearchResult/SearchResult";

class ResultsArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
        return(
            <div className="results-area">
                {this.props.searchResults.map((movie, resultIndex) =>
                    <SearchResult key={resultIndex} content={movie} contentType={this.props.contentType} />
                )}
            </div>
        )
    }
}

export default ResultsArea;