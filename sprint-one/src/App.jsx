import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./styles/main.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <main>
          <section className="video">
            <span className="video__title">BMX Rampage: 2018 Highlights</span>
            <div className="video-primary-info">
              <span className="video-primary-info__">By Red Cow</span>
              <span className="video-primary-info__upload-date">
                12/18/2018
              </span>
              <span className="video-primary-info__view-count">
                <img src="" alt="View Icon" />
                1,001,023
              </span>
              <span className="video-primary-info__like-count">
                <img src="" alt="Like Icon" />
                110,985
              </span>
            </div>
            <div className="video-secondary-info">
              <p className="video-secondary-info__text">
                On a gusty day in Southern Utah, a group of 25 daring mountain
                bikers blew the doors off what is possible on two wheels,
                unleashing some of the biggest moments the sport has ever seen.
                While mother nature only allowed for one full run before the
                conditions made it impossible to ride, that was all that was
                needed for event veteran Kyle Strait, who won the event for the
                second time -- eight years after his first Red Cow Rampage title
              </p>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
