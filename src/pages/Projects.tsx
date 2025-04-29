import "../styles/projects.css";

function Projects() {
  return (
    <div className="screen-projects">
      <header>
        <p>HOME</p>
        <p>ABOUT</p>
        <p>PROJECT</p>
        <p>ACADEMY</p>
      </header>

      <main>
        <div>
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

          <div className="container-cards-projects">
            <div className="card-two-projects">
              <p>3D PRODUCTS DESIGN</p>
              <p>Lorem ipsum dolor <br /> sit amet consectetur <br /> adipisicing elit.</p>
            </div>

            <div className="card-three-projects">
              <h1>teste1</h1>
            </div>
          </div>
        </div>

        <div></div>
        <div></div>
      </main>
    </div>
  );
}

export default Projects;
