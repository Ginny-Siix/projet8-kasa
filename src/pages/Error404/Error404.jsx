import "./error404.css";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <main>
      <h1 className="h1_error">404</h1>
      <h2>Oups! La page que vous demandez n&#8217;existe pas.</h2>
      <Link to="/" className="p_error">
        Retourner sur la page daccueil
      </Link>
    </main>
  );
}
