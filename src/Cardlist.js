import React from "react";
import Robo from "./Robo";
import "./cardlist.css";

const Cardlist = ({ robotsData }) => {
  return (
    <div className="robots_container">
      {robotsData.map((curUser) => {
        return (
          <Robo
            key={curUser.id}
            id={curUser.id}
            name={curUser.name}
            email={curUser.email}
          />
        );
      })}
    </div>
  );
};

export default Cardlist;
