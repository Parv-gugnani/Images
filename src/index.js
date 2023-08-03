import React from "react";
import ReactDOM from "react-dom"; // Correct import statement

import App from "./App";
import SearchImages from "./api";

SearchImages();

const el = document.getElementById("root");
ReactDOM.render(<App />, el); // Use ReactDOM.render to render your App component
