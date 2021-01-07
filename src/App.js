import logo from './logo.svg';
import './App.css';
import Ingredients from "./components/Ingredients";
import Calzone from "./components/Calzone";
import Menu from "./components/Menu";
import Pizza from "./components/Pizza";
import NotFound from "./components/NotFound";
import { Route, Switch } from "react-router";
  
function App() {
  return (
    <>
          <Router>
      <Switch>
        <Route exact path="/order/pizza"  component={Pizza}/>
        <Route exact path="/order/calzone"  component={Calzone}/>
        <Route exact path="/ingredients"  component={Ingredients}/>
        <Route exact path="/"  component={Menu}/>
        <Route  component={NotFound} status={404}/>
      </Switch>
    </Router>

    </>
  );
}

export default App;
