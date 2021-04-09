import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// service worker registration for offline caching:
serviceWorkerRegistration.register();
