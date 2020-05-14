import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import "./styles/main.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <MainContent />
      </div>
    );
  }
}

export default App;
