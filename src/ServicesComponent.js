import React, { Component } from "react";
import "./index.css";

class ServicesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1
    };
  }

  switchTab(selectedTab) {
    this.setState({
      selectedTab
    });
  }

  render() {
    return (
      <div>
        <div class="jumbotron">
          <img
            src="services-images/services-jumbotron.png"
            class="desktop"
            alt=""
          />
          <img
            src="services-images/services-mobile-jumbotron.png"
            class="mobile"
            alt=""
          />
          <h1 class="services-text">Services</h1>
        </div>
        <div class="main-content services">
          <div class="intro">
            Services include: completely synergize resource taxing relationships
            via premier niche markets. Professionally cultivate one-to-one
            customer service with robust ideas. Dynamically innovate
            resource-leveling customer service for state of the art customer
            service.
          </div>

          <div class="tabs">
            <div class="tab-links">
              {this.state.selectedTab === 1 ? (
                <div
                  class="tab-link pointer selected"
                  data-tab="1"
                  onClick={() => this.switchTab(1)}
                >
                  Pre-Construction
                </div>
              ) : (
                <div
                  class="tab-link pointer"
                  data-tab="1"
                  onClick={() => this.switchTab(1)}
                >
                  Pre-Construction
                </div>
              )}
              {this.state.selectedTab === 2 ? (
                <div
                  class="tab-link pointer selected"
                  data-tab="2"
                  onClick={() => this.switchTab(2)}
                >
                  Construction
                </div>
              ) : (
                <div
                  class="tab-link pointer"
                  data-tab="2"
                  onClick={() => this.switchTab(2)}
                >
                  Construction
                </div>
              )}
              {this.state.selectedTab === 3 ? (
                <div
                  class="tab-link pointer selected"
                  data-tab="3"
                  onClick={() => this.switchTab(3)}
                >
                  Design Build
                </div>
              ) : (
                <div
                  class="tab-link pointer"
                  data-tab="3"
                  onClick={() => this.switchTab(3)}
                >
                  Design Build
                </div>
              )}
              {this.state.selectedTab === 4 ? (
                <div
                  class="tab-link pointer selected"
                  data-tab="4"
                  onClick={() => this.switchTab(4)}
                >
                  Sustainability
                </div>
              ) : (
                <div
                  class="tab-link pointer"
                  data-tab="4"
                  onClick={() => this.switchTab(4)}
                >
                  Sustainability
                </div>
              )}
            </div>
            <div class="tab-contents">
              {this.state.selectedTab === 1 && (
                <div class="tab-content" data-tab="1">
                  <div class="text">
                    <h2>Pre-Construction</h2>
                    <p>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas. Dynamically innovate
                      resource-leveling customer service for state of the art
                      customer service.
                    </p>
                    <p>
                      Phosfluorescently engage worldwide methodologies with
                      web-enabled technology. Interactively coordinate proactive
                      e-commerce via process-centric "outside the box" thinking.
                      Completely pursue scalable customer service through
                      sustainable potentialities.
                    </p>
                  </div>
                  <img
                    src="services-images/services-tab-pre-construction-img.png"
                    class="desktop"
                    alt=""
                  />
                  <img
                    src="services-images/services-tab-mobile-pre-construction-img.png"
                    class="mobile"
                    alt=""
                  />
                </div>
              )}
              {this.state.selectedTab === 2 && (
                <div class="tab-content" data-tab="2">
                  <div class="text">
                    <h2>Construction</h2>
                    <p>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas. Dynamically innovate
                      resource-leveling customer service for state of the art
                      customer service.
                    </p>
                    <p>
                      Phosfluorescently engage worldwide methodologies with
                      web-enabled technology. Interactively coordinate proactive
                      e-commerce via process-centric "outside the box" thinking.
                      Completely pursue scalable customer service through
                      sustainable potentialities.
                    </p>
                  </div>
                  <img
                    src="services-images/services-tab-construction-img.png"
                    class="desktop"
                    alt=""
                  />
                  <img
                    src="services-images/services-tab-mobile-construction-img.png"
                    class="mobile"
                    alt=""
                  />
                </div>
              )}
              {this.state.selectedTab === 3 && (
                <div class="tab-content" data-tab="3">
                  <div class="text">
                    <h2>Design Build</h2>
                    <p>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas. Dynamically innovate
                      resource-leveling customer service for state of the art
                      customer service.
                    </p>
                    <p>
                      Phosfluorescently engage worldwide methodologies with
                      web-enabled technology. Interactively coordinate proactive
                      e-commerce via process-centric "outside the box" thinking.
                      Completely pursue scalable customer service through
                      sustainable potentialities.
                    </p>
                  </div>
                  <img
                    src="services-images/services-tab-design-build-img.png"
                    class="desktop"
                    alt=""
                  />
                  <img
                    src="services-images/services-tab-mobile-design-build-img.png"
                    class="mobile"
                    alt=""
                  />
                </div>
              )}
              {this.state.selectedTab === 4 && (
                <div class="tab-content" data-tab="4">
                  <div class="text">
                    <h2>Sustainability</h2>
                    <p>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas. Dynamically innovate
                      resource-leveling customer service for state of the art
                      customer service.
                    </p>
                    <p>
                      Phosfluorescently engage worldwide methodologies with
                      web-enabled technology. Interactively coordinate proactive
                      e-commerce via process-centric "outside the box" thinking.
                      Completely pursue scalable customer service through
                      sustainable potentialities.
                    </p>
                  </div>
                  <img
                    src="services-images/services-tab-sustainability-img.png"
                    class="desktop"
                    alt=""
                  />
                  <img
                    src="services-images/services-tab-mobile-sustainability-img.png"
                    class="mobile"
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesComponent;
