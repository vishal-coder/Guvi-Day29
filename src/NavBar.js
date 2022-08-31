import SpeedIcon from "@mui/icons-material/Speed";
import SettingsIcon from "@mui/icons-material/Settings";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

export function NavBar() {
  const [componentExpand, setComponentExpand] = useState(false);
  const [utilitiesExpand, setUtilitiesExpand] = useState(false);
  const [pagesExpand, setPagesExpand] = useState(false);
  const [navBarExpand, setNavBarExpand] = useState(true);
  const navigate = useNavigate();
  return (
    <div className={navBarExpand ? "navBarWrapper" : "navBarCollapse"}>
      <div className="adminWrapper">
        <EmojiEmotionsIcon className="smileyIcon" fontSize="large" />
        <div className="sbAdminDiv">
          SB ADMIN <sup>2</sup>
        </div>
      </div>
      <div>
        <hr className="adminHorizontalBreak"></hr>
      </div>
      <div
        className="dashBoardWrapper"
        onClick={() => {
          navigate("/");
          setUtilitiesExpand(false);
          setComponentExpand(false);
          setPagesExpand(false);
        }}
      >
        <SpeedIcon className="dashBoardIcon" fontSize="small" />
        <div className="dashBoard">Dashboard</div>
      </div>
      <div>
        <hr className="horizontalBreak"></hr>
      </div>
      <ul>
        <div className="listHeadingWrapper">INTERFACE</div>
        <li>
          <div
            className="listItemAnchorTag"
            onClick={() => {
              setComponentExpand(!componentExpand);
              setUtilitiesExpand(false);
              setPagesExpand(false);
            }}
          >
            <div className="listItem">
              <div
                className={
                  componentExpand
                    ? "listItemDescription hightlightText"
                    : "listItemDescription"
                }
              >
                <SettingsIcon className="listItemIcon" fontSize="100px" />
                <div>Components</div>
              </div>
              {componentExpand ? (
                <KeyboardArrowDownIcon className="arrowIcon" />
              ) : (
                <ArrowForwardIosIcon fontSize="small" className="arrowIcon" />
              )}
            </div>
          </div>
          {componentExpand ? (
            <ul className="subList">
              <div className="subListWrapper">CUSTOM COMPONENTS</div>
              <li className="subListItem" onClick={() => navigate("/buttons")}>
                Buttons
              </li>
              <li className="subListItem" onClick={() => navigate("/cards")}>
                Cards
              </li>
            </ul>
          ) : null}
        </li>
      </ul>
      <div>
        <hr className="horizontalBreak"></hr>
      </div>
      <ul>
        <div className="listHeadingWrapper">ADDONS</div>
        <li>
          <div
            className="listItemAnchorTag"
            onClick={() => {
              setPagesExpand(!pagesExpand);
              setComponentExpand(false);
              setUtilitiesExpand(false);
            }}
          >
            <div className="listItem">
              <div
                className={
                  pagesExpand
                    ? "listItemDescription hightlightText"
                    : "listItemDescription"
                }
              >
                <FolderIcon className="listItemIcon" fontSize="100px" />
                <div>Pages</div>
              </div>
              {pagesExpand ? (
                <KeyboardArrowDownIcon className="arrowIcon" />
              ) : (
                <ArrowForwardIosIcon fontSize="small" className="arrowIcon" />
              )}
            </div>
          </div>
          {pagesExpand ? (
            <ul className="subList">
              <div className="subListWrapper">LOGIN SCREENS:</div>
              <li className="subListItem" onClick={() => navigate("/login")}>
                <a href="#" className="subListItemAnchorTag">
                  Login
                </a>
              </li>
              <li className="subListItem" onClick={() => navigate("/register")}>
                <a href="#" className="subListItemAnchorTag">
                  Register
                </a>
              </li>
              <li
                className="subListItem"
                onClick={() => navigate("/forgot_password")}
              >
                <a href="#" className="subListItemAnchorTag">
                  Forgot Password
                </a>
              </li>
            </ul>
          ) : null}
        </li>
      </ul>
      <div>
        <hr className="horizontalBreak"></hr>
      </div>
      <div className="navBarExpand">
        <IconButton onClick={() => setNavBarExpand(!navBarExpand)}>
          {navBarExpand ? (
            <ArrowBackIosNewIcon fontSize="small" className="arrowIcon" />
          ) : (
            <ArrowForwardIosIcon fontSize="small" className="arrowIcon" />
          )}
        </IconButton>
      </div>
    </div>
  );
}
