import "./App.css";
import Navigation from "./component/Navigation";
import About from "./pages/About";
import Error from "./pages/Error";
import HeadandTail from "./pages/HeadandTail";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Navigation />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<HeadandTail />} path="/headandtail" />
        <Route element={<Error />} path="*" />
      </Routes>
    </>
  );
}

export default App;
