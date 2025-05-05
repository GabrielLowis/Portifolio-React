import { BsArrowDownShort } from "react-icons/bs";
import { BsChatLeftDots } from "react-icons/bs";
import { motion } from "framer-motion";

import "../styles/projects.css";

function Projects() {
  return (
    <motion.div
      className="screen-projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{ backgroundColor: "#000" }} // Garante o fundo preto na transição de saída
    >
      <main className="main-projects">
        <motion.section
          className="one-section-projects"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p>Gabriel</p>
          <div>
            <h1>
              <span>Touch</span> lights
              <br />
              with arts
            </h1>

            <button>
              VIEW NOW{" "}
              <BsArrowDownShort
                style={{ transform: "rotate(-130deg)" }}
                size={44}
                color="white"
              />
            </button>
          </div>
        </motion.section>

        <motion.section
          className="two-section-projects"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="header-projects">
            <div className="header-projects-contact">
              <div className="icon-header-projects">
                <BsChatLeftDots style={{ strokeWidth: 0.75 }} size={20} />
              </div>
              <div className="text-header-projects">
                <p>WELCOME</p>

                <img src="src/assets/imgs/fotoDePerfil.png" alt="" />
              </div>
            </div>

            <div className="menu-header-projects">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>

          <motion.div
            className="card-products-projects"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2>
              Unique
              <br />
              solutions
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia,
              recusandae magni iusto iure mollitia quaerat?
            </p>
            <img src="src/assets/imgs/camera.jpg" alt="" />

            <div className="card-products-projects-points">
              <div className="point point-checked"></div>
              <div className="point"></div>
              <div className="point"></div>
            </div>

            <div className="card-products-projects-button">
              <BsArrowDownShort
                style={{ transform: "rotate(-130deg)" }}
                size={50}
                color="white"
              />
            </div>
          </motion.div>

          <motion.div
            className="two-card-products-projects"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <div className="two-card-legend">
              <p>
                <b>AI</b> Developer Full Stack
              </p>
            </div>

            <div className="two-card-products-projects-button">
              <BsArrowDownShort
                style={{ transform: "rotate(-130deg)" }}
                size={50}
                color="white"
              />
            </div>
          </motion.div>
        </motion.section>
      </main>
    </motion.div>
  );
}

export default Projects;
