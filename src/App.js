import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Brands from "./components/Brands";
import Login from "./components/Login.js";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Register from "./components/Register.js";
import Perfumes from "./components/Perfumes.js";
import Perfume from "./components/Perfume.js";
import Brand from "./components/Brand.js";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/brands/:id" element={<Brand />} />
            <Route path="/perfumes" element={<Perfumes />} />
            <Route path="/perfume/:id" element={<Perfume />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
