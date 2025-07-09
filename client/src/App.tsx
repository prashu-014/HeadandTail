import "./App.css";
import About from "./pages/About";
import Error from "./pages/Error";
import HeadandTail from "./pages/HeadandTail";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<HeadandTail />} path="/headandtail" />
        </Route>
        <Route element={<Error />} path="*" />
      </Routes>
    </>
  );
}

export default App;
