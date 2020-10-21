import React from "react";
import "./App.css";
import "./css/style.css";
import "./css/icon-font.css";
// import {
//   Layout,
//   Header,
//   Navigation,
//   Drawer,
//   Content,
//   Footer,
//   FooterSection
// } from "react-mdl";
import { Link, NavLink } from "react-router-dom";
import Main from "./components/main.jsx";

function App() {
    return (
        <div className="demo-big-content" style={{ marginBottom: "0" }}>
            <Main />
        </div>
    );
}

export default App;
