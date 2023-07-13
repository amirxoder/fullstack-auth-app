"use client";
import React from "react";
import styles from "./CustomButton.module.css";

type CustomButtonProps = {
  title: string;
  onClickHandler: (event: React.MouseEvent<Element, MouseEvent>) => any;
};

const CustomButton = ({ title, onClickHandler }: CustomButtonProps) => {
  return (
    <button onClick={onClickHandler} className={`${styles.button} `}>
      {title}
    </button>
  );
};

export default CustomButton;
