import { ToastContainer } from "react-toastify";

import RoutesApp from "./routes";

import "./styles/global.css";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <RoutesApp />
    </>
  );
}

export default App;
