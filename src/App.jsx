import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Mainpage from "./Components/Mainpage";
import Secondpage from "./Components/Secondpage";
import Editor from "./Components/Editor";

import "./index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/Secondpage" element={<Secondpage />} />
          <Route path="/editor" element={<Editor />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
