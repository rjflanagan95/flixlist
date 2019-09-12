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
                <div className="search-poster">
                    <img src={"https://image.tmdb.org/t/p/w300" + this.props.content.poster_path} alt={"Poster for " + this.props.content.title} />
                </div>
                <div><span className="search-title">{this.props.content.title}</span><span className="search-release">{this.props.content.release_date}</span></div>
                <div className="search-overview">{this.props.content.overview}</div>
            </div>
        )
    }
}

export default SearchResult;