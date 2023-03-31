import React, { useState } from "react";
import NavItem from "./NavItem";


const MENU_LIST = [
  { text: "Profile", href: "/profile" },
  { text: "Explore", href: "/explore" },
  { text: "Assets", href: "/assets" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
      <nav className={`nav`}>
        <div className={`nav__menu-bar`} onClick={() => setNavActive(!navActive)}></div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              className="items"
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
  );
};

export default Navbar
