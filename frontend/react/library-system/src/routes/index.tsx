import { BrowserRouter, Route, Routes } from "react-router-dom";

import Explore from "../pages/Explore";
import Login from "../pages/Login";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
