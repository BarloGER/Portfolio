import SportBase from "../images/SportBase.png";
import PokeFight from "../images/PokeFight.png";
import Cookbook from "../images/Cookbook.png";
import "../styles/projects.css";

export default function Projects() {
  return (
    <main className="projects">
      <div className="content">
        <h1>Projekte</h1>
        <div className="item">
          <div className="title">
            <h2>SportBase</h2>
          </div>
          <div className="image">
            <a href="https://monumental-torrone-37d002.netlify.app/">
              <img src={SportBase} alt="Bild von SportsBase" />
            </a>
          </div>
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
          <div className="description">
            <p>
              SportBase ist eine Community Seite auf der Trainer Vereine und
              Events erstellen, Spieler hinzufügen und einteilen können.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="title">
            <h2>PokeFight</h2>
          </div>
          <div className="image">
            <a href="https://eloquent-alfajores-fa09a4.netlify.app/">
              <img src={PokeFight} alt="Bild von SportsBase" />
            </a>
          </div>
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
          <div className="description">
            <p>
              PokeFight ist praktisch gesehen ein Pokedex, es ist aber auch
              möglich Pokémon Kämpfe zu bestreiten.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="title">
            <h2>Cookbook</h2>
          </div>
          <div className="image">
            <a href="https://fabulous-entremet-1de18e.netlify.app/">
              <img src={Cookbook} alt="Bild von SportsBase" />
            </a>
          </div>
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
          <div className="description">
            <p>
              Cookbook ist ein Food-Blog in dem der Autor neue Rezepte
              hinzufügen, bearbeiten oder löschen kann.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
