import { BrowserRouter, Route, Routes } from "react-router-dom";

import Explore from "../pages/Explore";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
