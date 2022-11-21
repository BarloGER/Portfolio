import "../styles/about.css";
import Avatar from "../images/Mike.jpg";

export default function About() {
  return (
    <main className="about">
      <div className="content">
        <img src={Avatar} alt="Bild vom Autor" />
        <article>
          <h1>Über mich</h1>
          <br />
          <h2>Vom Infanteristen zum Developer</h2>
          <br />
          <h3>Vergangenheit</h3>
          <br />
          <p>
            Die ersten 8 Jahre meiner beruflichen Laufbahn, habe ich als Soldat
            verbracht. Die unterschiedlichsten Aufträge ausgeführt und viel fürs
            Leben gelernt. Unter anderem auch unter widrigsten Bedingungen
            gelassen zu bleiben. Zu der Stressresistenz habe ich mir absolute
            Teamfähigkeit aneignen können, denn allein erreicht man nichts.
            Disziplin, Ordnung und vor allem Pünktlichkeit spielen auch eine
            wichtige Rolle für mich. Ich besuchte die WBS Coding School und
            baute dort meine Kenntnisse als Full-Stack Developer aus. In enger
            Teamarbeit planten wir dort Projekte mit z. B. Trello und Figma und
            setzen diese dann mit dem MERN oder PERN-Stack um.
          </p>
          <br />

          <h3>Motivation</h3>
          <br />
          <p>
            Ich habe schon in der Schulzeit, über 2 Jahre einen IT-Kurs belegt
            und dort mein Interesse fürs Coden entdeckt. Dieses Interesse wurde
            damals, allerdings durch Abenteuerlust überschattet. Jetzt habe ich
            mich 8 Jahre lang ausgetobt und zu meiner alten Leidenschaft
            zurückgefunden, die ich nun zu meinem Beruf machen will.
          </p>
          <br />

          <h3>Aktuell</h3>
          <br />
          <p>
            Ich baue aktuell meine Fähigkeiten weiter aus, und sehe mich nach
            Jobs um.
          </p>
          <br />

          <h3>Zukunft</h3>
          <br />
          <p>
            In der Zukunft sehe ich mich, wie schon beim Bund, in einer
            Führungsposition. Im besten Fall als Senior Full-Stack Developer.
            Doch da aller Anfang schwer ist, lege ich mich zunächst nicht fest
            und freue mich auf alle Anfragen. Sei es als Jr. Full-Stack,
            Front-End oder Backend Developer.
          </p>
        </article>
      </div>
    </main>
  );
}
