import "./App.css";
import { useLocation, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Features from "./pages/Features";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Establishment from "./pages/Establishment";
import EBranches from "./pages/EBranches";
import ENotifications from "./pages/ENotifications";
import EProfile from "./pages/EProfile";
import GProfile from "./pages/GProfile";
import Guest from "./pages/Guest";
import GQueues from "./pages/GQueues";
import GNotifications from "./pages/GNotifications";

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
          <Route path="/ebranches" component={EBranches} />
          <Route path="/enotifications" component={ENotifications} />
          <Route path="/eprofile" component={EProfile} />
          <Route path="/gprofile" component={GProfile} />
          <Route path="/guest" component={Guest} />
          <Route path="/gqueues" component={GQueues} />
          <Route path="/gnotifications" component={GNotifications} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
