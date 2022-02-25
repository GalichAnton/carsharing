import { MouseEvent } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "./redux/redux-hooks";
import { formActions } from "../store/Slices/FormSlice";
import { dataActions } from "../store/Slices/dataSlice";

const useAutocomplete = () => {
  const dispatch = useDispatch();
  const { city } = useAppSelector((state) => state.form);

  const onCityChange = (option: any) => {
    if (option) {
      if (option.value !== city.name) dispatch(dataActions.resetData());
      dispatch(formActions.resetForm());
      dispatch(formActions.setCity({ name: option.value, id: option.id }));
    }
  };

  const onPointChange = (option: any) => {
    if (option) {
      dispatch(formActions.setPoint({ name: option.value, id: option.id }));
    }
  };

  const onReset = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.id === "city") {
      dispatch(dataActions.resetData());
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
