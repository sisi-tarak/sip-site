import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import { Provider } from "./Components/Context/Context";

const App = () => {
  return (
    <>
      <Provider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
