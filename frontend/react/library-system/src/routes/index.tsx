import { BrowserRouter, Route, Routes } from "react-router-dom";

import Explore from "../pages/Explore";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Book from "../pages/Book";

import { AuthProvider } from "../contexts/AuthContext";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/book/:id' element={<Book />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default RoutesApp;
