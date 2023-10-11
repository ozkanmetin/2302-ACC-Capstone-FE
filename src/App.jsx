import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home"
import { Cart } from "./components/Cart"
import { Login } from "./components/Login"
import { Signup } from "./components/Signup"
import { Navbar } from "./components/Navbar"
import { View } from "./components/View"
import './style/index.css'

const App = () => {
  return (
    <>
      {/* Navigation Component */}
      <header>
          <Navbar />
      </header>
      {/* Routes */}
      <main>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/View/:id" element={<View />} />
          </Routes>
        </div>
      </main>
      {/*  Footer */}
      <footer>
        <div className="foot">
            <p>(c) 1899 Zigs Capstone Inc</p>
        </div>
      </footer>
    </>
  );
}

export default App