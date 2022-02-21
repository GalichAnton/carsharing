import React, { FC } from "react";
import { ICheckbox } from "../../../../Interfaces/CheckBoxInterface";
import CheckBoxButton from "./CheckBoxButton/CheckBoxButton";
interface ICheckBoxGroupProps {
  checkboxes: ICheckbox[];
  handleChange: (checkbox: ICheckbox) => void;
}

const CheckBoxGroup: FC<ICheckBoxGroupProps> = ({
  checkboxes,
  handleChange,
}) => {
  return (
    <form>
      {checkboxes.map((checkbox) => (
        <CheckBoxButton
          key={checkbox.id}
          checkbox={checkbox}
          onChange={handleChange}
        />
      ))}
    </form>
  );
};

export default CheckBoxGroup;
