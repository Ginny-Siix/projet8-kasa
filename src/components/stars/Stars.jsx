import PropTypes from "prop-types";
import etoileActiveImage from "./../../assets/etoile_active.png";
import etoileInactiveImage from "./../../assets/etoile_inactive.png";
import "./stars.css";

function Stars({ nombreEtoilesActives, nombreEtoilesInactives }) {
  const stars = [];

  for (let i = 0; i < nombreEtoilesActives; i++) {
    stars.push(<img key={i} src={etoileActiveImage} alt="Étoile active" />);
  }

  for (let i = 0; i < nombreEtoilesInactives; i++) {
    stars.push(
      <img
        key={i + nombreEtoilesActives}
        src={etoileInactiveImage}
        alt="Étoile inactive"
      />
    );
  }

  return <div className="stars-container">{stars}</div>;
}

Stars.propTypes = {
  nombreEtoilesActives: PropTypes.number.isRequired,
  nombreEtoilesInactives: PropTypes.number.isRequired,
};

export default Stars;
