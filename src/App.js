import "./App.css";
import { useLocation, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Features from "./components/Features";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Establishment from "./components/Establishment"
import Branches from "./components/Branches";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";


function App() {
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition timeout={500} classNames="fade" key={location.key}>
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LogIn} />
          <Route
            path="/signup"
            render={(props) => (
              <SignUp
                typesOfEstablishments={["Resturant", "Bank", "Hospital"]}
              />
            )}
          />
          <Route path="/features" component={Features} />
          <Route path="/about" component={About} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/establishment" component={Establishment} />
          <Route path="/branches" component={Branches} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/profile" component={Profile} />

        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
