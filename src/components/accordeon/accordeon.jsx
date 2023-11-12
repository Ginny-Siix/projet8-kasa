/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React, { useState } from "react";
import "./accordeon.css";

function Accordeon({ title, equipments }) {
  const [contentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible(!contentVisible);
  };
console.log(contentVisible)
  return (
    <div className="details_contenent">
      <div className="topbar" onClick={toggleContent}>
        <p>{title}</p>
        <img
          className={`fleche_up ${contentVisible ? "rotate" : ""}`}
          src="../../src/assets/up_arrow.png"
          alt="Flèche"
        />
      </div>
      {contentVisible && (
        <div className="content">
          {Array.isArray(equipments) ? (
            <ul>
              {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          ) : (
            <p>{equipments}</p>
          )}
        </div>
      )}
    </div>
  );
}

Accordeon.propTypes = {
  title: PropTypes.string.isRequired,
  equipments: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
    .isRequired,
};

export default Accordeon;
