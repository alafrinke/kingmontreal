import React from "react";
import { Route } from "react-router-dom";
import "./styles.css";

import Homepage from "./pages/Homepage/homepage.component";

const hatPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

class App extends React.Component {
  render() {
    return <Homepage />;
  }
}

export default App;
