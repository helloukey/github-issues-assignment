import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { IssueContextProvider } from "./context/issueContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IssueContextProvider>
      <App />
    </IssueContextProvider>
  </React.StrictMode>
);
