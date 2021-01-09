import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Containers/Pages/Home/Home";
import HowItWorks from "./Containers/Pages/HowItWorks/HowItWorks";
import ButtonTemplate from "./Containers/Tools/ButtonTemplate";
import MyProfile from "./Containers/Pages/MyProfile/MyProfile";
import InputBox from "./Containers/Tools/InputBox";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={InputBox} />
          <Route path="/howitworks" component={HowItWorks} />
          <Route path="/MyProfile" component={MyProfile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
