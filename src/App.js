import "./App.css";
import { useLocation, Route, Switch, useHistory } from "react-router-dom";
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
import { useState, useEffect } from "react";

import ls from "local-storage";

function App() {
  // state:
  const [guestId, setGuestId] = useState(-1);
  const [establishmentId, setEstablishmentId] = useState(-1);
  const [branchId, setBranchId] = useState(-1);

  // hooks:
  let location = useLocation();
  let history = useHistory();
  useEffect(() => {
    setGuestId(ls.get("guestId") || -1);
    setEstablishmentId(ls.get("establishmentId") || -1);
    setBranchId(ls.get("branchId") || -1);
  }, []);

  // event handlers:

  //#region Log In:
  function handleSuccessfulGuestLogin(json) {
    // store guestId in state:
    const guestId = json.message.guest_id;
    setGuestId(guestId);

    // store guestId in Local Storage:
    ls.set("guestId", guestId);

    // redirect:
    history.push("/guest");
  }

  function handleSuccessfulEstablishmentLogin(json) {
    // store establishmentId in state:
    const establishmentId = json.message.establishment_id;
    setEstablishmentId(establishmentId);

    // store establishmentId in Local Storage:
    ls.set("establishmentId", establishmentId);

    // redirect:
    history.push("/establishment");
  }

  function handleSuccessfulBranchLogin(json) {
    // store branchId in state:
    const branchId = json.message.branch_id;
    setBranchId(branchId);

    // store branchId in Local Storage:
    ls.set("branchId", branchId);

    // redirect:
    history.push("/branch");
  }
  //#endregion

  //#region Sign Up:
  function handleSuccessfulGuestSignUp(json) {
    // store guestId:
    const guestId = json.message.guest_id;
    setGuestId(guestId);

    // redirect:
    history.push("/phone-verification");
  }

  function handleSuccessfulOtpCheck(json) {
    // redirect:
    history.push("/guest");
  }

  function handleSuccessfulEstablishmentSignUp(json) {
    // store guestId:
    const establishmentId = json.message.establishment_id;
    setEstablishmentId(establishmentId);

    // redirect:
    history.push("/establishment");
  }

  //#endregion

  //#region logout:
  function handleGuestLogout() {
    // clear local storage:
    ls.remove("guestId");

    // update state:
    setGuestId(-1);
  }

  function handleEstablishmentLogout() {
    // clear local storage:
    ls.remove("establishmentId");

    // update state:
    setEstablishmentId(-1);
  }

  function handleBranchLogout() {
    // clear local storage:
    ls.remove("branchId");

    // update state:
    setBranchId(-1);
  }
  //#endregion

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
                establishmentTypes={[
                  "Resturant",
                  "Bank",
                  "Hospital",
                  "Supermarket",
                ]}
                handleSuccessfulGuestSignUp={handleSuccessfulGuestSignUp}
                handleSuccessfulEstablishmentSignUp={
                  handleSuccessfulEstablishmentSignUp
                }
              />
            )}
          />
          <Route path="/features" component={Features} />
          <Route path="/about" component={About} />
          <Route path="/contact-us" component={ContactUs} />
          <Route
            path="/establishment"
            render={(props) => (
              <Establishment
                {...props}
                establishmentId={establishmentId}
                handleEstablishmentLogout={handleEstablishmentLogout}
              />
            )}
          />
          <Route
            path="/eprofile"
            render={(props) => (
              <EProfile
                establishmentTypes={[
                  "Resturant",
                  "Bank",
                  "Hospital",
                  "Supermarket",
                ]}
                {...props}
                establishmentId={establishmentId}
                handleEstablishmentLogout={handleEstablishmentLogout}
              />
            )}
          />
          <Route
            path="/ebranches"
            render={(props) => (
              <EBranches
                {...props}
                establishmentId={establishmentId}
                handleEstablishmentLogout={handleEstablishmentLogout}
              />
            )}
          />
          <Route
            path="/enotifications"
            render={(props) => (
              <ENotifications
                {...props}
                establishmentId={establishmentId}
                handleEstablishmentLogout={handleEstablishmentLogout}
              />
            )}
          />
          <Route
            path="/guest"
            render={(props) => (
              <Guest
                {...props}
                guestId={guestId}
                handleGuestLogout={handleGuestLogout}
              />
            )}
          />
          <Route
            path="/gprofile"
            render={(props) => (
              <GProfile
                {...props}
                guestId={guestId}
                handleGuestLogout={handleGuestLogout}
              />
            )}
          />
          <Route
            path="/gqueues"
            render={(props) => (
              <GQueues
                {...props}
                guestId={guestId}
                handleGuestLogout={handleGuestLogout}
              />
            )}
          />
          <Route
            path="/gnotifications"
            render={(props) => (
              <GNotifications
                {...props}
                guestId={guestId}
                handleGuestLogout={handleGuestLogout}
              />
            )}
          />
          <Route
            path="/branch"
            render={(props) => (
              <Branch
                {...props}
                branchId={branchId}
                handleBranchLogout={handleBranchLogout}
              />
            )}
          />
          <Route
            path="/bprofile"
            render={(props) => (
              <BProfile
                {...props}
                branchId={branchId}
                handleBranchLogout={handleBranchLogout}
              />
            )}
          />
          <Route
            path="/bqueues"
            render={(props) => (
              <BQueues
                {...props}
                branchId={branchId}
                handleBranchLogout={handleBranchLogout}
              />
            )}
          />
          <Route
            path="/bnotifications"
            render={(props) => (
              <BNotifications {...props} branchId={branchId} />
            )}
          />
          <Route
            path="/phone-verification"
            render={(props) => (
              <PhoneVerification
                {...props}
                guestId={guestId}
                handleSuccessfulOtpCheck={handleSuccessfulOtpCheck}
              />
            )}
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
