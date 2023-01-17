import React from "react";
import "../Styles/Nav.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Nav() {
  let navigate = useNavigate();
  function handleClick(page) {
    navigate(page);
  }
  return (
    <div className="Nav">
      <div onClick={() => handleClick("/")}>
        <FontAwesomeIcon icon="fa-solid fa-house" size="" />
      </div>
      <div onClick={() => handleClick("/search")} className="search">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </div>
      <div onClick={() => handleClick("/favory")} className="favory">
        <FontAwesomeIcon icon="fa-solid fa-star" />
      </div>
      <div onClick={() => handleClick("/setting")} className="setting">
        <FontAwesomeIcon icon="fa-solid fa-gear" />
      </div>
    </div>
  );
}

export default Nav;
