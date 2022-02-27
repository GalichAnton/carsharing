import React, { FC, MouseEvent } from "react";
import Select, { createFilter } from "react-select";
import classes from "./Autocomplete.module.scss";
import CloseBtn from "../UI/Inputs/CloseBtn";
import { IOption } from "../../Interfaces/OptionInterface";
interface IAutocompleteProps {
  onChange: (option: any) => void;
  valueState: string;
  onReset: (e: MouseEvent<HTMLButtonElement>) => void;
  placeholder: string;
  name: string;
  isDisabled?: boolean;
  labelText: string;
  options: IOption[];
}
const filterConfig: any = {
  ignoreCase: true,
  ignoreAccents: true,
  trim: true,
  matchFrom: "start",
};
const Autocomplete: FC<IAutocompleteProps> = (props) => {
  const {
    onChange,
    options,
    valueState,
    onReset,
    placeholder,
    name,
    isDisabled,
    labelText,
  } = props;

  return (
    <div className={classes.inputContainer}>
      <label className={classes.inputLabel}>{labelText}</label>

      <Select
        className={classes.input}
        classNamePrefix={classes.input}
        name={name}
        onChange={onChange}
        options={options}
        value={
          valueState
            ? options.filter((option: IOption) => option.value === valueState)
            : null
        }
        isSearchable={true}
        placeholder={placeholder}
        isDisabled={isDisabled}
        noOptionsMessage={() => "Пункт не найден"}
        filterOption={createFilter(filterConfig)}
      />
      <span id={name} onClick={onReset} className={classes.close}>
        {valueState && CloseBtn}
      </span>
    </div>
  );
};

export default Autocomplete;
