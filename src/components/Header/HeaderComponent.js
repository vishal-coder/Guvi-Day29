import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function HeaderComponent() {
  return (
    <div className="navbar">
      sdfsdf
      <Link to="#" className="menu-bars">
        <FontAwesomeIcon icon={faBars} />
        sdfsfdfsdf
      </Link>
    </div>
  );
}

export default HeaderComponent;
