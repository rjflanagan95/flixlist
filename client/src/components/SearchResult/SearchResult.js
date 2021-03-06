import React, { Component } from "react";
import "./SearchResult.css";
// import API from "../../utils/API";

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        // this.getTrailer = this.getTrailer.bind(this);
    }

    // getTrailer() {
    //     let movieID = this.props.id;
    //     API.getTrailer(movieID)
    //     .then(res => {
    //         console.log(res);
    //     })
    // }

    render() {
        return(
            <div>
                {/* the keys on the API results vary between movies and TV shows */}
                {(this.props.contentType === "tv") ? (
                    <div className="search-result">
                        <div className="search-poster">
                            {(this.props.content.poster_path) ? (<img src={"https://image.tmdb.org/t/p/w300" + this.props.content.poster_path} alt={"Poster for " + this.props.content.name} />) : (<img src={"https://via.placeholder.com/300"} alt={"No poster available for " + this.props.content.name} />)}
                        </div>
                        <div className="search-title">{this.props.content.name}</div>
                        <div className="search-release">{this.props.content.first_air_date}</div>
                        <div className="search-overview">{this.props.content.overview}</div>
                    </div>
                ) : (
                    <div className="search-result">
                        <div className="search-poster">
                            {(this.props.content.poster_path) ? (<img src={"https://image.tmdb.org/t/p/w300" + this.props.content.poster_path} alt={"Poster for " + this.props.content.title} />) : (<img src={"https://via.placeholder.com/300"} alt={"No poster available for " + this.props.content.title} />)}
                        </div>
                        <div className="search-textarea">
                            <div className="search-title">{this.props.content.title}</div>
                            <div className="search-release">{this.props.content.release_date}</div>
                            <div className="search-overview">{this.props.content.overview}</div>
                            {/* <div className="trailer-btn" onClick={this.getTrailer}>Watch Trailer</div> */}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default SearchResult;