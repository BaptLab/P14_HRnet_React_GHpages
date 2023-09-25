import { Routes, Route, HashRouter } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Error404 from "../pages/Error404";
import Employees from "../pages/Employees";

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
