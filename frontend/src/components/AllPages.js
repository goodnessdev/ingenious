import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import Navbar from "./Navbar";
import Home from "./Home";
import Explore from "./Explore";
import About from "./About";
import Quiz from "./Quiz";
import Login from "../forms/Login";
import Signup from "../forms/Signup";
import Dyk from "./Dyk";

const AllPages = () => {
    const location = useLocation();
    const hideNavbar = ['/login', '/signup'];
    const { user } = useAuthContext();
    
  return (
    <div className="text-gray-600 font-afacadFlux">
        {!hideNavbar.includes(location.pathname) && <Navbar />}

        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/about" element={<About />} />
          <Route path="/dyk" element={<Dyk />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
        </Routes>
    </div>
  );
};

export default AllPages;
