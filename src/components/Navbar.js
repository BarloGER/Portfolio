import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/navigation.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav className="navigation">
        <a href="/" className="brand-name">
          <span id="brand-name-span">M</span>
          <span id="brand-name-span">B</span>
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {!isNavExpanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul className="nav-links">
            <NavLink
              to="/"
              onClick={() => {
                setIsNavExpanded(false);
              }}
              aria-label="Leitet zurück auf die Landingpage"
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => {
                setIsNavExpanded(false);
              }}
              aria-label="Link zur über mich Seite"
            >
              <li>Über mich</li>
            </NavLink>
            <NavLink
              to="/projects"
              onClick={() => {
                setIsNavExpanded(false);
              }}
              aria-label="Leitet weiter zu meinen Projekten"
            >
              <li>Projekte</li>
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => {
                setIsNavExpanded(false);
              }}
              aria-label="Leitet weiter zu den Kontaktinformationen"
            >
              <li>Kontakt</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}
