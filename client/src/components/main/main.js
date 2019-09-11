import React, { Component } from "react";
import "./main.css";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div id="main">
                <div id="recommended">
                    <span id="rec-header">Recommended Searches</span>
                    <div>
                        <ul>
                            <li>Popular Movies</li>
                            <li>Movies from the 80s</li>
                            <li>Dramatic Movies</li>
                            <li>Popular TV Shows</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;