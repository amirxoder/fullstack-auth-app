import React from "react";
import styles from "./Footer.module.css";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Link from "next/link";

const socialIcons = [
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        {new Date().getFullYear()}&copy; | All right reserved
      </div>
      <div className={styles.social}>
        {socialIcons.map((Item, index) => (
          <Link href={"/"} key={index}>
            <Item />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
