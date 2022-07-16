import React from "react";
import reactDom from "react-dom";
import App from "./components/App.jsx"
import { BrowserRouter } from 'react-router-dom';

reactDom.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));