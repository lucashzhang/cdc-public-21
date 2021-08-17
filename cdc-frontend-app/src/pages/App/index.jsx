import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Landing from "../Landing";
import Hackathon from "../Hackathon";
import Conference from "../Conference";
import Target from "../Target";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <div className="App-Content">
        <Switch>
          <Route path="/t/:targetId" component={Target} />
          <Route path="/conference" component={Conference} />
          <Route path="/hackathon" component={Hackathon} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
