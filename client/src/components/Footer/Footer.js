import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div id="footer">
                {/* <div><a href="https://github.com/rjflanagan95/flixlist">github</a></div> */}
                <div>This product uses the <a href="https://www.themoviedb.org/">TMDb API</a> but is not endorsed or certified by TMDb.</div>
            </div>
        )
    }
}

export default Footer;