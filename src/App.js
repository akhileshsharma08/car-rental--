import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
// import Checkout from "./Components/Checkout";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Cars from "./Components/Cars";
import { Provider } from "react-redux";
import store from "./store/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            {/* <Route exact path="/checkout" element={<Checkout />}></Route> */}
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/cars" element={<Cars />}></Route>
            <Route exact path="/logout" element={<Logout />}></Route>
            <Route exact path="*" element={<Error />}></Route>
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
