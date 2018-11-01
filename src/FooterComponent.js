import React, { Component } from "react";
import "./index.css";

class FooterComponent extends Component {
  render() {
    return (
      <div class="bottom-stuff">
        <div class="contact">
          <div class="email">
            <h3>Interested in starting a project?</h3>
            <h3>Let's talk:</h3>
            <input class="form" type="text" value="Enter email"></input><br/>
            <span>We'll never share your email with anyone else.</span>
          </div>
          <div class="office">
            <h3>New York</h3>
            123 Lane
            <br />
            Suite 100
            <br />
            Albany, NY 12345
            <br />
            202 555 0144
            <br />
          </div>
          <div class="office">
            <h3>Florida</h3>
            Ocean Drive
            <br />
            Suite 201
            <br />
            Orlando, FL 22345
            <br />
            502 555 0144
            <br />
          </div>
          <div class="office">
            <h3>California</h3>
            Mountain Street
            <br />
            Suite 105
            <br />
            San Diego, CA 22345
            <br />
            702 555 0144
            <br />
          </div>
        </div>
        <footer>Copyright © 2018 Smith and Jones</footer>
      </div>
    );
  }
}

export default FooterComponent;