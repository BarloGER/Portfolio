import "../styles/contact.css";

export default function Contact() {
  return (
    <main className="contact">
      <div className="content">
        <h1>Kontakt</h1>
        <article>
          <p>
            Zurzeit bin ich auf Arbeitssuche. Sollte euer Interesse geweckt
            sein, schreibt mich gerne per E-Mail oder LinkedIn an.
          </p>
        </article>
        <div className="contact-info">
          <a href="mailto:barlozewski.mike@gmail.com">
            <button>Email</button>
          </a>
          <a
            href="https://www.linkedin.com/in/mike-barlozewski/"
            target="_blank"
            rel="noreferrer"
          >
            <button>LinkedIn</button>
          </a>
        </div>
      </div>
    </main>
  );
}
