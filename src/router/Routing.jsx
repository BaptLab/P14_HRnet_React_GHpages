import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Error404 from "../pages/Error404";
import Employees from "../pages/Employees";

/**
 * Routing Component
 *
 * This component sets up the application's routing using React Router.
 * It defines the routes and the components to render for each route.
 *
 * @returns {JSX.Element} The Routing component JSX.
 */
const Routing = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </HashRouter>
  );
};

export default Routing;
