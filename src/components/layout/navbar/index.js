import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { withTrans } from "../../../i18n/withTrans";
import { useTranslation } from "react-i18next";

const Navbar = ({ t }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isScroll, setIsScroll] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { i18n } = useTranslation();
  const { language } = i18n;

  const open = Boolean(anchorEl);

  const handleAnchor = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChooseLang = () => {
    setAnchorEl(null);
    let lang = language === "id" ? "en" : "id";
    i18n.changeLanguage(lang);
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <nav className={isScroll || click ? "navbar scroll" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Sandbox
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <span class="material-icons">{click ? "close" : "menu"}</span>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <CustomLink
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Demos
                <ExpandMoreIcon color="primary" />
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Pages
                <ExpandMoreIcon color="primary" />
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
                <ExpandMoreIcon color="primary" />
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Blog
                <ExpandMoreIcon color="primary" />
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Blocks
                <ExpandMoreIcon color="primary" />
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Documentation
                <ExpandMoreIcon color="primary" />
              </CustomLink>
            </li>

            <li className="language-btn-mobile">
              <div className="language-btn" onClick={handleAnchor}>
                {language === "id" ? "ID" : "EN"}
                <ExpandMoreIcon />
              </div>
              {!button && (
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                >
                  <MenuItem onClick={handleChooseLang}>
                    {language === "id" ? "EN" : "ID"}
                  </MenuItem>
                </Menu>
              )}
            </li>
          </ul>
          {button && (
            <>
              <div className="language-btn" onClick={handleAnchor}>
                {language === "id" ? "ID" : "EN"}
                <ExpandMoreIcon />
              </div>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleChooseLang}>
                  {language === "id" ? "EN" : "ID"}
                </MenuItem>
              </Menu>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

function CustomLink({ children, to, className, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      className={match ? `${className} active` : className}
      {...props}
    >
      {children}
    </Link>
  );
}

export default withTrans(Navbar);
