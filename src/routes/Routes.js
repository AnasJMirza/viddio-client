import React from "react";

import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import SignIn from "../pages/SignIn";
import Video from "../pages/Video";

const Routes = () => {
  return (
    // <BrowserRouter>
    <Router>
      <Route path="/">
        <Route index element={<Home type={"random"} />} />
        <Route path="trending" element={<Home type={"trend"} />} />
        <Route path="subscription" element={<Home type={"sub"} />} />
        <Route path="search" element={<Search />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="video">
          <Route path=":id" element={<Video />} />
        </Route>
      </Route>
    </Router>
    // //</BrowserRouter>
  );
};

export default Routes;
