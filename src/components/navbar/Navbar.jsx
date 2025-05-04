import React from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../../utils/useWindowSize";
import MobileMenu from "./mobile-menu/MobileMenu";
import DesktopMenu from "./desktop-menu/DesktopMenu";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const { width } = useWindowSize();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const openMenu = () => {
    setIsMenuOpened(true);
  };
  const closeMenu = () => {
    setIsMenuOpened(false);
  };
  return (
    <div>
      <div className="navbar">
        <div className="navbar__left-side">
          <Link to={"/"}>
            <div className="navbar__left-side__logo">
              <span className="navbar__left-side__logo__text">
                {" "}
                E-com-store
              </span>
            </div>
          </Link>
        </div>
        <div className="navbar__right-side">
          {width < 800 ? (
            isMenuOpened ? (
              <AiOutlineClose
                onClick={closeMenu}
                className="navbar__right-side__icon"
              />
            ) : (
              <RxHamburgerMenu
                onClick={openMenu}
                className="navbar__right-side__icon"
              />
            )
          ) : (
            <DesktopMenu />
          )}
        </div>
      </div>
      {isMenuOpened && <MobileMenu closeFn={closeMenu} />}
    </div>
  );
};

export default Navbar;
