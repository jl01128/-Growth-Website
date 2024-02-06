import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/home" className="brand-name">
        <img src="/logo.png" alt="logo"/>
        <h2>Explore</h2>
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        <FontAwesomeIcon icon={faBars} className="dropbtn"/>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/team">team</a>
          </li>
          <li>
            <a href="/privacy">privacy</a>
          </li>
          <li>
            <a href="/resources">resources</a>
          </li>
          {/* <li>
            <a href="/donate">donate</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
