import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <main className="home">
      <div className="content">
        <h1>
          Hi I'm <span>Mike Barlozewski</span> <br />
          I'm a Full Stack Web Developer
        </h1>
        <Link to="/projects">
          <button>Zu meinen Projekten</button>
        </Link>
      </div>
    </main>
  );
}
