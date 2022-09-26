import { BrowserRouter, Route, Routes } from "react-router-dom";

import Explore from "../pages/Explore";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
