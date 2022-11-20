import "../styles/about.css";
import Avatar from "../images/Mike.jpg";

export default function About() {
  return (
    <main className="about">
      <div className="content">
        <img src={Avatar} alt="Bild vom Autor" />
        <article>
          <h1>Über mich</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fugit
            perferendis provident aliquid beatae esse sit fuga sint odio
            accusamus. Autem rerum voluptate exercitationem molestias
            dignissimos perspiciatis sit dolor, mollitia corrupti. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Fugit perferendis
            provident aliquid beatae esse sit fuga sint odio accusamus. Autem
            rerum voluptate exercitationem molestias dignissimos perspiciatis
            sit dolor, mollitia corrupti. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Fugit perferendis provident aliquid
            beatae esse sit fuga sint odio accusamus. Autem rerum voluptate
            exercitationem molestias dignissimos perspiciatis sit dolor,
            mollitia corrupti.
          </p>
        </article>
      </div>
    </main>
  );
}
