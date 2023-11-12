/* eslint-disable react/prop-types */
import "./thumb.css";
import { NavLink } from "react-router-dom";

export default function Thumb({ appart }) {
  return (
    <article className="thumb">
      <NavLink to={`/logement/${appart.id}`}>
        <img src={appart.cover} alt={appart.title} />
        <h2>{appart.title}</h2>
      </NavLink>
    </article>
  );
}
