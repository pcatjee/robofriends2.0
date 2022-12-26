import React from "react";
import "./header.css";

const Header = ({ searchfield, searchChange }) => {
  return (
    <>
      <div className="headerText">ROBO FRIENDS</div>
      <div>
        <input
          type="text"
          id="lname"
          name="lname"
          placeholder="Search"
          onChange={searchChange}
        />
      </div>
    </>
  );
};

export default Header;
