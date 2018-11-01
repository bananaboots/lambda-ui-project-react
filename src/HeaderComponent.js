import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class HeaderComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hamburgerOpen: false
    }
  }

  openHamburger() {
    this.setState({
      hamburgerOpen: true
    });
  }

  closeHamburger() {
    this.setState({
      hamburgerOpen: false
    });
  }

  render() {
    return (
      <div>
        <header class="header">
          <div class="logo">
            {this.props.title}
          </div>
          <div class="nav">
            <div class="hamburger">
              {
                this.state.hamburgerOpen ?
                <img src="nav-hamburger-close.png" className = "pointer" alt="" onClick = {() => this.closeHamburger()} /> :
                <img src="nav-hamburger.png" className = "pointer" alt="" onClick = {() => this.openHamburger()}/>
              }
            </div>
          </div>
        </header>
        {
          this.state.hamburgerOpen && (
            <div class="hamburger-expanded">
              <div class="links">
                <Link to = "/" onClick = {() => this.closeHamburger()}>Home</Link><br/>
                <Link to = "/services" onClick = {() => this.closeHamburger()}>Services</Link><br/>
                <a href="#">Contact</a><br/>
                <a href="#">About</a>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default HeaderComponent;
