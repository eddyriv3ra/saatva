import React, { ReactNode } from "react";
import styles from "./button.module.scss";
import cx from "classnames";

interface ButtonProps {
  children: ReactNode;
  status?: "primary";
  selected?: boolean;
  onClick: () => void;
}

const Button = ({ children, status, selected, onClick }: ButtonProps) => {
  const customButtonStyle = cx(styles.button, {
    [styles.button__primary]: status === "primary",
    [styles.button__selected]: selected,
  });

  return (
    <button className={customButtonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
