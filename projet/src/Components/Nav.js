import React from "react";
import "../Styles/Nav.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

function Nav(ccr) {
  let navigate = useNavigate();
  function handleClick(page) {
    navigate(page);
  }
  function handleMouseIcon(nameRef) {
    gsap
      .timeline()
      .fromTo(nameRef, { rotate: 0 }, { rotate: 360, duration: 2 });
  }

  return (
    <div className="Nav" style={ccr ? {position: 'fixed'} : {position: 'relative'}}>
      <div
        id="AnimIconHouse"
        onMouseEnter={() => handleMouseIcon("#AnimIconHouse")}
        onClick={() => handleClick("/")}
      >
        <FontAwesomeIcon icon="fa-solid fa-house" />
      </div>
      <div
        id="AnimIconSearch"
        onMouseEnter={() => handleMouseIcon("#AnimIconSearch")}
        onClick={() => handleClick("/search")}
        className="search"
      >
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </div>
      <div
        id="AnimIconFavory"
        onMouseEnter={() => handleMouseIcon("#AnimIconFavory")}
        onClick={() => handleClick("/favory")}
        className="favory"
      >
        <FontAwesomeIcon icon="fa-solid fa-star" />
      </div>
      <div
        id="AnimIconSetting"
        onMouseEnter={() => handleMouseIcon("#AnimIconSetting")}
        onClick={() => handleClick("/setting")}
        className="setting"
      >
        <FontAwesomeIcon icon="fa-solid fa-gear" />
      </div>
    </div>
  );
}

export default Nav;