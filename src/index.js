import React from "react";
import ReactDOM from "react-dom";

import App from "./pages/App";
import { GeneralProvider } from "./providers/generalContext";

ReactDOM.render(
  <React.StrictMode>
    <GeneralProvider>
      <App />
    </GeneralProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
