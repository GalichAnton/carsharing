import React, { FC } from "react";

interface IButtonProps {
  title: string;
  onClick?: () => void;
  className: string;
  background?: string;
  disabled?: boolean;
}
const Button: FC<IButtonProps> = (props) => {
  const { title, onClick, className, background, disabled } = props;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={className}
      style={{ background: `${background}` }}
    >
      {title}
    </button>
  );
};

export default Button;
