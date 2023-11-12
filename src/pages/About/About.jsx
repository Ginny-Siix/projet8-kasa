import Banner from "../../components/Banner/Banner";
import Accordeon from "../../components/accordeon/accordeon";
import "./about.css";

export default function About() {
  return (
    <main>
      <Banner aboutPage />
      <div className="accordeon accordeon_about">
        <div className="">
          <Accordeon
            title="Fiabilité"
            equipments={
              "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
            }
          />
        </div>
        <div>
          <Accordeon
            title="Respect"
            equipments={
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            }
          />
        </div>
        <div>
          <Accordeon
            title="Service"
            equipments={
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            }
          />
        </div>
        <div>
          <Accordeon
            title="Sécurité"
            equipments={
              "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            }
          />
        </div>
      </div>
    </main>
  );
}
