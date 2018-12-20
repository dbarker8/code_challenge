import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import './assets/css/app.css';

//components
import App from "./App";

//bootstrap
import "bootstrap/dist/css/bootstrap.css";

import './assets/plugins/font-awesome.js';

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
