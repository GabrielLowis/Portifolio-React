
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputSound from "../components/InputSound";
import Music from "../components/Music";
import MiniSlider from "../components/MiniSlider";
import RightBar from "../components/RightBar";
import CustomCursor from "../components/CustomCursor";

import { motion } from "framer-motion";

import bestImg from "../assets/imgs/best.jpg";
import imagemTeste from "../assets/imgs/imagem-de-fundo-yeaxrij2aepc1xio.jpg";

import "../styles/page.css";

const Page = () => {
  const [showInputSound, setShowInputSound] = useState(false);

  const images = [bestImg, imagemTeste, bestImg, imagemTeste];

  const navigate = useNavigate();

  return (
    <div className="screen">
      <CustomCursor />

      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2
          onClick={() => navigate("/projects")}
          style={{ cursor: "pointer" }}
        >
          GABRIEL
        </h2>
      </motion.header>

      <main>
        <motion.div
          className="container-one"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div>
            <h1>Tech. Lead</h1>
            <h2>Full-Stack Developer</h2>
            <p>
              Passionate about building scalable web applications and leading
              teams. Always eager to learn and adapt to new technologies. Always
              eager to learn and adapt to new technologies.
            </p>
            <button className="button">
              <span className="button_lg">
                <span className="button_sl"></span>
                <span className="button_text">Download Now</span>
              </span>
            </button>
          </div>

          <div
            onMouseEnter={() => setShowInputSound(true)}
            onMouseLeave={() => setShowInputSound(false)}
          >
            <Music />
            <InputSound visible={showInputSound} />
          </div>
        </motion.div>

        <motion.div
          className="lowis"
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <img
            src="\src\assets\imgs\eu.png"
            alt="Imagem do Gabriel muito bonito"
          />
        </motion.div>

        <motion.div
          className="container-two"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <MiniSlider images={images} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <RightBar />
        </motion.div>
      </main>
    </div>
  );
};

export default Page;
