import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import "./styles/main.css";

class App extends React.Component {
  // State will contain default comments
  state = {
    name: ["Micheal Lyons", "Gary Wong", "Theodore Duncan"],
    date: ["12/18/2018", "12/18/2018", "11/15/2018"],
    comment: [
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    ],
  };

  // Higher function .map() that loops through state obj and generate array of data

  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <MainContent
          name={this.state.name}
          date={this.state.date}
          comment={this.state.comment}
        />
      </div>
    );
  }
}

export default App;
