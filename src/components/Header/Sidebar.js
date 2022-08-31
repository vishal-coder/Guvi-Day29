import * as React from "react";
import { sidebardata } from "./sidebardata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaughWink } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="navbar-brand">
        <a href="#" className="font-faLaughWink">
          <FontAwesomeIcon icon={faLaughWink} />
        </a>
      </div>
      <nav>
        <ul>
          {sidebardata.map((item, key) => {
            return (
              <Link to={item.link}>
                <li key={key} className={item.title} onClick={() => {}}>
                  <div>{item.icon}</div>
                  <div className="sidebar-text1">{item.title}</div>
                </li>{" "}
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
