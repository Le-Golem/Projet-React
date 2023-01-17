import React from "react";
import "../Styles/NotFound.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="NotFound">
      <p>Oups !</p>
      <h1>
        Nous n'avons pas trouvé cette page
        <FontAwesomeIcon className="SadFace" icon="fa-solid fa-face-sad-cry" />
      </h1>

      <FontAwesomeIcon
        className="Icon"
        icon="fa-solid fa-arrow-left"
        color="white"
        size="10x"
        onClick={() => navigate(-1)}
      />
      {/* <p></p> */}
    </div>
  );
}

export default NotFound;
