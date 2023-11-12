import { NavLink, useMatch } from "react-router-dom";
import Logo from "../../assets/LOGO.svg";

import "./navigation.css";

export default function Navigation() {
  const isAccueilActive = useMatch({ path: "/" });
  const isAboutActive = useMatch({ path: "/about" });

  return (
    <header>
      <div className="nav_container">
        <img src={Logo} alt="logo de kasa" />
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={isAccueilActive ? "active" : ""}>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={isAboutActive ? "active" : ""}>
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
