"use client";

import { navItems } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { BiCodeAlt } from "react-icons/bi";
import styles from "./Navbar.module.css";
import CustomButton from "../CustomButton/CustomButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const loginHandler = async () => {
    console.log("login");
  };

  const toggleMenuHandler = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href={"/"} className={styles.logo}>
          AC
          <BiCodeAlt />
        </Link>
        <div className={styles.links}>
          {navItems.map((item) => (
            <Link
              className={styles.link}
              href={`/${item !== "home" ? item : ""}`}
              key={item}
            >
              {item}
            </Link>
          ))}

          <CustomButton title="Login" onClickHandler={loginHandler} />
        </div>

        <div className={styles.mobileNav}>
          <GiHamburgerMenu onClick={toggleMenuHandler} />
          <div
            className={`${styles.mobileLinks}  ${toggleMenu && styles.show}`}
          >
            <AiOutlineClose
              className={styles.close}
              onClick={toggleMenuHandler}
            />
            {navItems.map((item) => (
              <Link
                className={`${styles.mobileLink}`}
                href={`/${item !== "home" ? item : ""}`}
                key={item}
              >
                <p>{item}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
