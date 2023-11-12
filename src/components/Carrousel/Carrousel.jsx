/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

import flecheGauche from "../../assets/fleche-gauche.svg";
import flecheDroite from "../../assets/fleche-droite.svg";

import "./carrousel.css";

export default function Carrousel({ data }) {
  const [index, setIndex] = useState(0);

  const clickDroit = () => {
    if (index === data.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  };

  const clickGauche = () => {
    if (index === 0) {
      return setIndex(data.length - 1);
    }
    setIndex(index - 1);
  };

  return (
    <div className="carrousel">
      {data.length > 1 && <img
        className="gauche"
        src={flecheGauche}
        alt="fleche gauche"
        onClick={clickGauche}
      />}
      <img className="main-image" src={data[index]} alt="carrousel" />
      {data.length > 1 && <img
        className="droite"
        src={flecheDroite}
        alt="fleche droite"
        onClick={clickDroit}
      />}
      {data.length > 1 && <p>
        {index + 1} / {data.length}
      </p>}
    </div>
  );
}
