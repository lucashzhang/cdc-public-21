import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Landing from "../Landing";
import Hackathon from "../Hackathon";
import Conference from "../Conference";
import Target from "../Target";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/t/:targetId" component={Target} />
          <Route path="/conference" component={Conference} />
          <Route path="/hackathon" component={Hackathon} />
          <Route path="/" component={Landing} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
