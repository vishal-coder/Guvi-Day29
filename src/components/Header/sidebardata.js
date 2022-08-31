import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faFolder,
  faGaugeHigh,
  faGear,
  faChartColumn,
  faTable,
} from "@fortawesome/free-solid-svg-icons";

export const sidebardata = [
  {
    title: "Dashboard",
    icon: <FontAwesomeIcon icon={faGaugeHigh} />,
    link: "/dashboard",
  },
  {
    title: "Components",
    icon: <FontAwesomeIcon icon={faGear} />,
    link: "/components",
  },
  {
    title: "Utilities",
    icon: <FontAwesomeIcon icon={faWrench} />,
    link: "/utilities",
  },
  {
    title: "Pages",
    icon: <FontAwesomeIcon icon={faFolder} />,
    link: "/pages",
  },
  {
    title: "Charts",
    icon: <FontAwesomeIcon icon={faChartColumn} />,
    link: "/charts",
  },
  {
    title: "Tables",
    icon: <FontAwesomeIcon icon={faTable} />,
    link: "/tables",
  },
];
