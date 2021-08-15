import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/Index";

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
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
