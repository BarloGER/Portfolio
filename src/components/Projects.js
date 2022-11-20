import SportBase from "../images/SportBase.png";
import PokeFight from "../images/PokeFight.png";
import Cookbook from "../images/Cookbook.png";
import "../styles/projects.css";

export default function Projects() {
  return (
    <main className="projects">
      <div className="content">
        <h1>Projekte</h1>
        <div className="Project1">
          <h2>SportsBase</h2>
          <a href="https://monumental-torrone-37d002.netlify.app/">
            <img src={SportBase} alt="Bild von SportsBase" />
          </a>
          <div className="buttons">
            <button>
              <a
                href="https://github.com/BarloGER/fp"
                target="_blank"
                rel="noreferrer"
              >
                Frontend
              </a>
            </button>
            <button>
              <a
                href="https://github.com/BarloGER/fp-backend"
                target="_blank"
                rel="noreferrer"
              >
                Backend
              </a>
            </button>
          </div>
        </div>

        <div className="Project2">
          <h2>PokeFight</h2>
          <a href="https://eloquent-alfajores-fa09a4.netlify.app/">
            <img src={PokeFight} alt="Bild von SportsBase" />
          </a>
          <div className="buttons">
            <button>
              <a
                href="https://github.com/BarloGER/poke-fight"
                target="_blank"
                rel="noreferrer"
              >
                Frontend
              </a>
            </button>
            <button>
              <a
                href="https://github.com/BarloGER/poke-fight-backend-server"
                target="_blank"
                rel="noreferrer"
              >
                Backend
              </a>
            </button>
          </div>
        </div>

        <div className="Project3">
          <h2>Cookbook</h2>
          <a href="https://fabulous-entremet-1de18e.netlify.app/">
            <img src={Cookbook} alt="Bild von SportsBase" />
          </a>
          <div className="buttons">
            <button>
              <a
                href="https://github.com/BarloGER/react-cookbook"
                target="_blank"
                rel="noreferrer"
              >
                Frontend
              </a>
            </button>
            <button>
              <a
                href="https://github.com/BarloGER/cookbook-api"
                target="_blank"
                rel="noreferrer"
              >
                Backend
              </a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
