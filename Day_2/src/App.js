/*import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Layout/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import { Login } from "./pages/Login/Login";
import { Register } from "./Signup/Register";
// import Header from "./components/Layout/Header";
//import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links }
        <nav>
          <ul>
            <li><Link to="/">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/menu">services</Link></li>
          </ul>
        </nav>

        {/* Routes }
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Layout/Home";
import About from "./components/Layout/About";
import Contact from "./components/Layout/Contact";
import Menu from "./components/Layout/Menu";
import Pagenotfound from "./components/Layout/Pagenotfound";
import { Login } from "./components/Layout/Login";
import { Register } from "./components/Layout/Register";

//import Header from "./components/Layout/Header";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
