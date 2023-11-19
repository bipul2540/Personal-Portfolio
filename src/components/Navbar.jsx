import React, { useState } from "react";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";


import {Link,  animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const scrollToAbout = () => {
    scroll.scrollTo(730); // Adjust the offset as needed
  };
  return (
    <nav
      className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center mx-auto max-w-7xl  ">
        <Link
          to={"/"}
          className="flex items-center gap-2 "
          onClick={() => {
            setActive("");
            console.log("clicked");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9" />
          <p className="text-[18px] font-bold cursor-pointer">
            Bipul kr.
            <span className="sm:block hidden">| Web Developer</span>
          </p>
        </Link>

        <ul className="list-none sm:flex hidden flex-row gap-5">
          {navLinks.map((link) => (
            <li
              className="text-secondary
              hover:text-white text-[18px] font-medium cursor-pointer"
              key={link.id}
            >
              <Link activeClass="active" smooth={true} duration={500} isDynamic={true} offset={-100} to={`${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex justify-end flex-1 items-center">
          <img
            src={toggle ? close : menu}
            alt="hamburger"
            onClick={() => setToggle(!toggle)}
            className="w-[28px] h-[28px] object-contain cursor-pointer"
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[240px] z-10 rounded-xl`}
          >
            <ul className="list-none flex items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <Link to={`${link.id}`} offset={-100}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
