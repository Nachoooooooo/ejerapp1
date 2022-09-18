import React, { Component } from "react";
import List from "./List";
import { Route, Routes } from 'react-router-dom'
//import Home from '../Home'


export class Main extends Component {
  render() {
    return (
    <main>
      <Routes>
        <Route element={<List />} path={"/"} />
        {/*<Route element={<Home />} path={"/"} />*/}
      </Routes>
    </main>
    )
  }
}

export default Main;
