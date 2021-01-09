import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Containers/Pages/Home/Home";
import HowItWorks from "./Containers/Pages/HowItWorks/HowItWorks";
import ButtonTemplate from "./Containers/Tools/ButtonTemplate";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ButtonTemplate} />
          <Route path="/howitworks" component={HowItWorks} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
