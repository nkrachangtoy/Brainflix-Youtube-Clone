import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// IMPORT PAGE COMPONENTS //
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import MainVideo from "./components/MainVideo";
import UploadPage from "./components/Upload";

// STYLE //
import "./styles/main.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={MainContent} exact />
          <Route path="/videos" component={MainContent} />
          <Route path="/videos/:id" component={MainContent} />
          <Route path="/upload" component={UploadPage} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
