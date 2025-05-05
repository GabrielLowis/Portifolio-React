import { useNavigate } from "react-router-dom";
import { BsArrowDownShort } from "react-icons/bs";
import { motion } from "framer-motion";

import "../styles/about.css";
import Trophy from "../components/Trophy";

function Projects() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="screen-about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: "#000" }} // Garante que o fundo seja preto durante o efeito de saída
    >
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p onClick={() => navigate("/page")}>HOME</p>
        <p className="about" onClick={() => navigate("/about")}>
          ABOUT
        </p>
        <p onClick={() => navigate("/projects")}>PROJECT</p>
        <p>ACADEMY</p>
      </motion.header>

      <main>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="card-one-projects">
            <div className="text-container">
              <h2>
                <b>I</b>
                <br />
                TRANS- <br />
                LATE{" "}
                <b>
                  YOUR <br /> IDEAS
                </b>
              </h2>
            </div>
            <div className="name-card-projects">
              <img src="src/assets/imgs/cerebro.png" alt="Um cérebro" />
            </div>
          </div>

          <motion.div
            className="container-cards-projects"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="card-two-projects">
              <div className="arrow-card-projects">
                <div>
                  <BsArrowDownShort size={34} color="black" />
                </div>
              </div>
              <p>3D PRODUCTS DESIGN</p>
              <p>
                Experienced in creating immersive 3D websites <br /> that engage
                users.
              </p>
            </div>

            <div className="card-three-projects">
              <img src="src/assets/imgs/image2.png" alt="Mão com celular" />
              <div className="arrow-card-projects-2">
                <div>
                  <BsArrowDownShort size={34} color="black" />
                </div>
              </div>
              <p>
                <span>
                  APP <br /> MOBILE
                </span>
              </p>
              <p>
                Skilled in developing modern and user-friendly mobile apps. I
                build responsive. I build responsive.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Trophy />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="card-pen">
            <p className="p-card-pen">
              THINKING OUT<span>,</span>
              <br /> <b>CREATING</b>
              <span>,</span>
              <br /> HELPING<span>.</span>
            </p>

            <div>
              <img src="src/assets/imgs/caneta.png" alt="Caneta de ouro" />
            </div>
          </div>

          <div className="background-image-star">
            <p>
              QUALITY <br />
              <b>DIGITAL</b> <br />
              SERVICES.
            </p>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}

export default Projects;
