import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Loader from "./components/Loader";
import Page from "./pages/Page";
import About from "./pages/About";
import Projects from "./pages/Projects";

import "./styles/app.css";

// LoaderScreen separado para poder usar navigate dentro
function LoaderScreen() {
  const [canClick, setCanClick] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanClick(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (!canClick) return;
    setTransitioning(true);
    setTimeout(() => {
      navigate("/page");
    }, 2000);
  };

  return (
    <div className="loader-screen">
      <div
        className={`loader-container ${canClick ? "pulse" : ""}`}
        onClick={handleClick}
      >
        <Loader />
      </div>
      {transitioning && <div className="circle-transition" />}
    </div>
  );
}

// Separar o conteúdo para usar useLocation dentro de BrowserRouter
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LoaderScreen />} />
        <Route path="/page" element={<Page />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
