import React from "react";
import "./robo.css";

const Robo = ({ id, name, email }) => {
  return (
    <>
      <section>
        <div className="container">
          <img src={`https://robohash.org/${id}.png?size=200x200`} alt="robo" />
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </section>
    </>
  );
};

export default Robo;
