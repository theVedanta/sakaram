import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/Index";
import Guage from "./components/Guage";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/guages">
          <Guage />
        </Route>
        <Route exact path="/infotainment">
          <Index />
        </Route>
        <Route exact path="*">
          <h1>404</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
