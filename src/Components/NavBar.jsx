import React, { Component } from 'react';
import "./NavBar.css"

class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            name: "container",
            display:'none'
        }
    }
// Burger from w3school.com
    Burger = () => {
        if (this.state.name === "container") {
          this.setState({
            name: "change",
            display:'block'
          }
          )
        }
        else if (this.state.name === "change") {
          this.setState({
            name: "container",
            display:'none'
          }
          )
        }
      }
      
    render() {
        return (
            <div>
                <div id="nav">
                    <div id="links" style={{display: this.state.display}}>
                        <a href="#about"><h2>About Me</h2></a>
                        <a href="#portfolio"><h2>Portfolio</h2></a>
                        <a href="#contact"><h2>Contact</h2></a>
                    </div>
                {/* <div className="mobile"> */}
                    <div className={this.state.name} onclick={this.Burger}>
                        <div className="hamburger">
                            <div className="burgerBar1"></div>
                            {/* <a href="about"><h2>About Me</h2></a> */}
                            <div className="burgerBar2"></div>
                            {/* <a href="portfolio"><h2>Portfolio</h2></a> */}
                            <div className="burgerBar3"></div>   
                            {/* <a href="contact"><h2>Contact</h2></a> */}
                        </div>
                        {/* </div> */}
                    </div>
                    <div className="defaultState">
                        <a href="#about"><h2>About Me</h2></a>
                        <a href="#portfolio"><h2>Portfolio</h2></a>
                        <a href="#contact"><h2>Contact</h2></a>
                    </div>
                    </div>
                </div>
        );
    }
}

export default NavBar;