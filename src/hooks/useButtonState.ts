import { useAppSelector } from "./redux/redux-hooks";
import { useNavigate } from "react-router-dom";
import { modalActions } from "../store/Slices/ModalSlice";
import { useDispatch } from "react-redux";
enum Paths {
  location = "/order/location",
  model = "/order/model",
  more = "/order/more",
  total = "/order/total",
}
const useButtonState = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { locationStep, modelStep, moreStep, totalStep } = useAppSelector(
    (state) => state.valid
  );
  const handleOpenOrderModal = () => {
    dispatch(modalActions.setOpenModal(true));
  };
  const setButtonTitle = (location: string) => {
    switch (location) {
      case Paths.location:
        return "Выбрать модель";
      case Paths.model:
        return "Дополнительно";
      case Paths.more:
        return "Итого";
      case Paths.total:
        return "Заказать";
      default:
        return "Отменить";
    }
  };
  const setButtonDisable = (location: string) => {
    switch (location) {
      case Paths.location:
        return !locationStep;
      case Paths.model:
        return !modelStep;
      case Paths.more:
        return !moreStep;
      case Paths.total:
        return !totalStep;
      default:
        return true;
    }
  };
  const setHandleOnclick = (location: string) => {
    switch (location) {
      case Paths.location:
        return () => navigate(Paths.model);
      case Paths.model:
        return () => navigate(Paths.more);
      case Paths.more:
        return () => navigate(Paths.total);
      case Paths.total:
        return () => handleOpenOrderModal();
      default:
        break;
    }
  };
  return { setButtonTitle, setButtonDisable, setHandleOnclick };
};

export default useButtonState;
