import classNames from "classnames";
import React from "react";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  bgColor?: string;
  borderColor?: string;
  className?: string;
  color?: string;
  width?: string;
  variant?: "filled" | "outlined";
}

const Button = ({
  children,
  bgColor,
  className,
  color,
  width,
  variant,
}: Props) => {
  return (
    <button
      className={classNames(
        "app-btn",
        {
          "is-filled": variant === "filled",
          "is-outline": variant === "outlined",
        },
        className
      )}
      style={{
        color,
        backgroundColor: bgColor,
        width,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
