import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Containers/Pages/Home/Home";
import HowItWorks from "./Containers/Pages/HowItWorks/HowItWorks";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/howitworks" component={HowItWorks} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
