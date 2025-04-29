import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Loader from "./components/Loader";
import Page from "./pages/Page.tsx";
import Projects from "./pages/Projects.tsx";
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

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoaderScreen />} />
          <Route path="/page" element={<Page />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
