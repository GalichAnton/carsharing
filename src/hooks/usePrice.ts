import { useAppSelector } from "./redux/redux-hooks";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formActions } from "../store/Slices/FormSlice";

const usePrice = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const form = useAppSelector((state) => state.form);
  const calcPrice = () => {
    if (form.dateFrom && form.dateTo && form.rate) {
      const time = Date.parse(form.dateTo) - Date.parse(form.dateFrom);
      let tempPrice = 0;
      switch (form.rate.rateTypeId.unit) {
        case "сутки":
          tempPrice = form.rate.price * Math.ceil(time / 1000 / 60 / 60 / 24);
          break;
        case "мин":
          tempPrice = form.rate.price * Math.ceil(time / 1000 / 60);
          break;
        case "7 дней":
          tempPrice =
            form.rate.price * Math.ceil(time / 1000 / 60 / 60 / 24 / 7);
          break;
        case "30 дней":
          tempPrice =
            form.rate.price * Math.ceil(time / 1000 / 60 / 60 / 24 / 30);
          break;
      }
      if (form.moreOptions[0].isChecked) tempPrice += 500;
      if (form.moreOptions[1].isChecked) tempPrice += 200;
      if (form.moreOptions[2].isChecked) tempPrice += 1600;
      setPrice(tempPrice);
    } else setPrice(0);
  };
  useEffect(() => {
    dispatch(formActions.setPrice(Math.ceil(price)));
  }, [price]);
  return { calcPrice };
};
export default usePrice;
