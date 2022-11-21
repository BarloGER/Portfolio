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
          <button>
            <a href="mailto:barlozewski.mike@gmail.com">Email</a>
          </button>
          <button>
            <a
              href="https://www.linkedin.com/in/mike-barlozewski/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </button>
        </div>
      </div>
    </main>
  );
}
