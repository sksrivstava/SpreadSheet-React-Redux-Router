import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from "react-redux";
import Employent from "./Component/Employent";

import { Store } from "./Action/Store";
import { SpredSheet } from "./Component/SpredSheet";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
/* import Home from "./component/Home";
import About from "./component/About";
import Contactus from "./component/Contactus"; */

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            {/* <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contactus}></Route> */}
            <Route exact path="/" component={Employent}></Route>
            <Route path="/SpredSheet" component={SpredSheet}></Route>
            {/*  <Route path="/:post_id" component={Post}></Route> */}
          </Switch>
        </div>
      </BrowserRouter>
      {/* <SpredSheet /> */}
      {/* <Employent /> */}
    </Provider>
  );
}

export default App;
