import { MouseEvent } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "./redux/redux-hooks";
import { formActions } from "../store/Slices/FormSlice";
import { locationActions } from "../store/Slices/LocationSlice";
import { IOption } from "../Interfaces/OptionInterface";

const useAutocomplete = () => {
  const dispatch = useDispatch();
  const { name } = useAppSelector((state) => state.form.city);

  const onCityChange = (option: IOption) => {
    if (option) {
      if (option.value !== name) dispatch(locationActions.resetData());
      dispatch(formActions.resetForm());
      dispatch(formActions.setCity({ name: option.value, id: option.id }));
    }
  };

  const onPointChange = (option: IOption) => {
    if (option) {
      dispatch(formActions.setPoint({ name: option.value, id: option.id }));
    }
  };

  const onReset = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.id === "city") {
      dispatch(locationActions.resetData());
      dispatch(formActions.resetForm());
    } else {
      dispatch(formActions.resetPoint());
    }
  };

  return {
    onCityChange,
    onPointChange,
    onReset,
  };
};
export default useAutocomplete;
