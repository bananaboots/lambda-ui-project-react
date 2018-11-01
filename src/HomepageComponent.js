import React, { Component } from "react";
import "./index.css";

class HomepageComponent extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron">
          <img src="home-images/home-jumbotron.png" class="desktop" />
          <img src="home-images/home-mobile-jumbotron.png" class="mobile" />
          <h1>
            Integrity,
            <br />
            Excellence,
            <br />
            Progress.
            <br />
          </h1>
        </div>

        <div class="main-content">
          <section class="intro">
            <div class="box architects">
              <div class="text-content">
                <h2>Smith & Jones Architects</h2>
                <br />
                <p>
                  Et sed autem causae appareat, tempor abhorreant te mei, facer
                  facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo
                  etiam laboramus dissentiet in, nec no errem.
                </p>
                <br />
                <div class="btn">Learn More</div>
              </div>
              <img src="home-images/home-img-1.png" class="desktop" />
              <img src="home-images/home-mobile-img-1.png" class="mobile" />
            </div>
            <div class="box designs">
              <img src="home-images/home-img-2.png" class="desktop" />
              <img src="home-images/home-mobile-img-2.png" class="mobile" />
              <div class="text-content">
                <h2>Futuristic Designs</h2>
                <br />
                <p>
                  Et sed autem causae appareat, tempor abhorreant te mei, facer
                  facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo
                  etiam laboramus dissentiet in, nec no errem.
                </p>
                <br />
                <div class="btn">View Designs</div>
              </div>
            </div>
          </section>

          <section class="projects">
            <h2>Recent Projects</h2>
            <div class="project">
              <img src="home-images/home-villas-img.png" class="desktop" />
              <img
                src="home-images/home-mobile-villas-img.png"
                class="mobile"
              />
              <div class="overlay">The Villas</div>
              <div class="content">
                <p>
                  The Villas bring to the table win-win survival strategies to
                  ensure proactive domination. At the end of the day, going
                  forward, a new normal that has evolved from generation X is on
                  the runway heading towards a streamlined cloud solution.
                </p>
                <br />
                <p>
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway will close the loop on focusing
                  solely on the bottom line.
                </p>
              </div>
            </div>
            <div class="project">
              <img src="home-images/home-outskirts-img.png" class="desktop" />
              <img
                src="home-images/home-mobile-outskirts-img.png"
                class="mobile"
              />
              <div class="overlay left">Outskirts</div>
              <div class="content">
                <p>
                  The Outskirts are amazing to the table win-win survival
                  strategies to ensure proactive domination. At the end of the
                  day, going forward, a new normal that has evolved from
                  generation X is on the runway heading towards a streamlined
                  cloud solution.
                </p>
                <br />
                <p>
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway will close the loop on focusing
                  solely on the bottom line.
                </p>
              </div>
            </div>
            <div class="project">
              <img src="home-images/home-the-blocks-img.png" class="desktop" />
              <img
                src="home-images/home-mobile-the-blocks-img.png"
                class="mobile"
              />
              <div class="overlay">The Blocks</div>
              <div class="content">
                <p>
                  The Blocks are amazing to the table win-win survival
                  strategies to ensure proactive domination. At the end of the
                  day, going forward, a new normal that has evolved from
                  generation X is on the runway heading towards a streamlined
                  cloud solution.
                </p>
                <br />
                <p>
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway will close the loop on focusing
                  solely on the bottom line.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default HomepageComponent;