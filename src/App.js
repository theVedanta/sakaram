import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/Index";
import Infotainment from "./components/Infotainment";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/guages">
          <Index />
        </Route>
        <Route exact path="/infotainment">
          <Infotainment />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
