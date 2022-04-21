//import "dotenv/config";
//console.log(process.env.API_KEY);

import reactDom from "react-dom";
import App from "./components/app";

let target = document.querySelector("#app");
reactDom.render(<App />, target);
