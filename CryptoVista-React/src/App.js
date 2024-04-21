import "./App.css";
import Navbar from "./Components/Navbar";
import PrivateRoute from "./Components/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

// pages
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import About from "./pages/About";

// pages/components level
import TransactionPage from "./pages/Transact/TransactionPage";
import Track from "./pages/CryptoTrack/Track";
import Trending from "./pages/Trends/Trending";
import CoinDetailPage from "./pages/CryptoTrack/component/CoinDetailPage";
import  Footer  from "./Footer";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen min-h-screen	flex flex-col  bg-gray-200 ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/CryptoTrack" element={<Track />} />
          <Route  path="/coins/:id" element={<CoinDetailPage/>}/>

        <Route path="/trending" element={<Trending />} />
        <Route path="/transact" element={<TransactionPage isLoggedIn={isLoggedIn} />} />
        <Route path="/login"   element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn}><Dashboard />
        </PrivateRoute>}/>
      </Routes>
      <div className="position bottom-0 w-full">
      <Footer/>
      </div>
    </div>
  );
}

export default App;


