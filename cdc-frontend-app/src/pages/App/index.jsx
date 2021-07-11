import React from "react";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Landing from "../Landing";
import Target from '../Target';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.scss";

function App() {
  return (
    <Router>
      <Hero />
      <Switch>
        <Route path="/t/:targetId" component={Target} />
        <Route path="/" component={Landing} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
