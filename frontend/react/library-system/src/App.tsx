import { ToastContainer } from "react-toastify";

import RoutesApp from "./routes";
import GlobalStyle from "./styles/global";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <RoutesApp />
    </>
  );
}

export default App;
