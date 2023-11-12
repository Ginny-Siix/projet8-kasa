/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../data/logements.json";
import Accordeon from "../../components/accordeon/accordeon";
import Carrousel from "../../components/Carrousel/Carrousel";
import Stars from "../../components/stars/Stars";

import "./logement.css";

export default function Logement() {
  const [logement, setLogement] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const selectedLogement = data.find((logement) => logement.id === id);

    if (selectedLogement) {
      setLogement(selectedLogement);
    } else {
      navigate("/404");
    }
  }, [id, navigate]);

  if (!logement) {
    return <div>ça charge...</div>;
  }

  // Calcul du nombre d'étoiles actives et inactives
  const rating = logement.rating;
  const nombreEtoilesActives = Math.floor(rating);
  const nombreEtoilesInactives = 5 - nombreEtoilesActives;

  return (
    <main>
      <article>
        <Carrousel data={logement.pictures} />
        <div className="header_logements">
          <section className="title">
            <h1 className="titre">{logement.title}</h1>
            <h2 className="sous_titre">{logement.location}</h2>
            <ul className="tags">
              {logement.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </section>
          <div className="infos">
            <figure className="host">
              <figcaption>{logement.host.name}</figcaption>
              <img src={logement.host.picture} alt="Vendeur" />
            </figure>
            <div className="rate">
              <Stars
                nombreEtoilesActives={nombreEtoilesActives}
                nombreEtoilesInactives={nombreEtoilesInactives}
              />
            </div>
          </div>
        </div>
        <div className="details">
          <Accordeon title="Description" equipments={logement.description} />
          {logement.equipments && (
            <Accordeon title="Équipements" equipments={logement.equipments} />
          )}
        </div>
      </article>
    </main>
  );
}
