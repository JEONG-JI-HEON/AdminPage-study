import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import "./assets/css/index.css";
import { worker } from "./mocks/browser";
// import { server } from "./mocks/server";

import App from "./routes/App";

if (process.env.NODE_ENV === "development") {
  // const { worker } = await import("./mocks/browser");

  worker.start({
    onUnhandledRequest: "bypass",
  });
}

// worker.start();

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
