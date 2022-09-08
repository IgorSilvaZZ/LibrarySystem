import { ToastContainer } from "react-toastify";

import RoutesApp from "./routes";

import { AuthProvider } from "./contexts/AuthContext";

import "./styles/global.css";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <RoutesApp />
      </AuthProvider>
    </>
  );
}

export default App;
