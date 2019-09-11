import React, { Component } from "react";
import "./nav.css";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div id="header">
                <div id="header-title"><a href="/"><span>flixlist</span></a></div>
                <div id="tab-list">
                    <a href="/movies">
                        <div className="nav-tab" id="movies-tab">
                            <span className="nav-tab-text">MOVIES</span>
                        </div>
                    </a>
                    <a href="/tv">
                        <div className="nav-tab" id="tv-tab">
                            <span className="nav-tab-text">TV</span>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Nav;