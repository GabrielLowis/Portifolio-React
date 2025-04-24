import { useState } from "react";
import InputSound from "../components/InputSound";
import Music from "../components/Music";
import MiniSlider from "../components/MiniSlider";
import "../styles/page.css";

import bestImg from "../assets/imgs/best.jpg";
import imagemTeste from "../assets/imgs/imagem-de-fundo-yeaxrij2aepc1xio.jpg";

const Page = () => {
  const [showInputSound, setShowInputSound] = useState(false);

  const images = [bestImg, imagemTeste, bestImg, imagemTeste];

  return (
    <div className="border">
      <div className="screen">
        <header>
          <h2>GABRIEL</h2>
        </header>
        <main>
          <div className="container-one">
            <div>
              <h1>Tech. Lead</h1>
              <h2>Full-Stack Developer</h2>
              <p>
                Passionate about building scalable web applications and leading
                teams. Always eager to learn and adapt to new technologies.
                Always eager to learn and adapt to new technologies.
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
          </div>

          <div className="lowis">
            <img
              src="\src\assets\imgs\eu.png"
              alt="Imagem do Gabriel muito bonito"
            />
          </div>

          <div className="container-two">
            {/* <div className="card"> */}
            <MiniSlider images={images} />
            {/* </div> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
