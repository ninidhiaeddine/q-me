import "./App.css";
import {
  useLocation,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Features from "./pages/Features";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Guest from "./pages/Guest";
import Establishment from "./pages/Establishment";
import EBranches from "./pages/EBranches";
import ENotifications from "./pages/ENotifications";
import EProfile from "./pages/EProfile";
import GProfile from "./pages/GProfile";
import BProfile from "./pages/BProfile";
import GQueues from "./pages/GQueues";
import GNotifications from "./pages/GNotifications";
import Branch from "./pages/Branch";
import BQueues from "./pages/BQueues";
import BNotifications from "./pages/BNotifications";
import PhoneVerification from "./pages/PhoneVerification";
import { useState } from "react";

function App() {
  // state:
  const [guestId, setGuestId] = useState(-1);
  const [establishmentId, setEstablishmentId] = useState(-1);
  const [branchId, setBranchId] = useState(-1);

  // hooks:
  let location = useLocation();
  let history = useHistory();

  // event handlers:

  function handleSuccessfulGuestLogin(json) {
    // store guestId:
    const guestId = json.message.guest_id;
    setGuestId(guestId);

    // redirect:
    history.push("/guest");
  }

  function handleSuccessfulEstablishmentLogin(json) {
    // store establishmentId:
    const establishmentId = json.message.establishment_id;
    setEstablishmentId(establishmentId);

    // redirect:
    history.push("/establishment");
  }

  function handleSuccessfulBranchLogin(json) {
    // store branchId:
    const branchId = json.message.branch_id;
    setBranchId(branchId);

    // redirect:
    history.push("/branch");
  }

  return (
    <TransitionGroup>
      <CSSTransition timeout={500} classNames="fade" key={location.key}>
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route
            path="/login"
            render={(props) => (
              <LogIn
                {...props}
                handleSuccessfulGuestLogin={handleSuccessfulGuestLogin}
                handleSuccessfulEstablishmentLogin={
                  handleSuccessfulEstablishmentLogin
                }
                handleSuccessfulBranchLogin={handleSuccessfulBranchLogin}
              />
            )}
          />
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
          <Route path="/contact-us" component={ContactUs} />
          <Route
            path="/establishment"
            render={(props) => (
              <Establishment {...props} establishmentId={establishmentId} />
            )}
          />
          <Route
            path="/eprofile"
            render={(props) => (
              <EProfile {...props} establishmentId={establishmentId} />
            )}
          />
          <Route
            path="/ebranches"
            render={(props) => (
              <EBranches {...props} establishmentId={establishmentId} />
            )}
          />
          <Route
            path="/enotifications"
            render={(props) => (
              <ENotifications {...props} establishmentId={establishmentId} />
            )}
          />
          <Route
            path="/guest"
            render={(props) => <Guest {...props} guestId={guestId} />}
          />
          <Route
            path="/gprofile"
            render={(props) => <GProfile {...props} guestId={guestId} />}
          />
          <Route
            path="/gqueues"
            render={(props) => <GQueues {...props} guestId={guestId} />}
          />
          <Route
            path="/gnotifications"
            render={(props) => <GNotifications {...props} guestId={guestId} />}
          />
          <Route
            path="/branch"
            render={(props) => <Branch {...props} branchId={branchId} />}
          />
          <Route
            path="/bprofile"
            render={(props) => <BProfile {...props} branchId={branchId} />}
          />
          <Route
            path="/bqueues"
            render={(props) => <BQueues {...props} branchId={branchId} />}
          />
          <Route
            path="/bnotifications"
            render={(props) => (
              <BNotifications {...props} branchId={branchId} />
            )}
          />
          <Route path="/phone-verification" component={PhoneVerification} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
