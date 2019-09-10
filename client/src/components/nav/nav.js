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
                <div id="header-title">flixlist</div>
                <div id="tab-list">
                    <div className="nav-tab">
                        <span className="nav-tab-text">MOVIES</span>
                    </div>
                    <div className="nav-tab">
                        <span className="nav-tab-text">TV</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;