import { useAppSelector } from "./redux/redux-hooks";
import { useNavigate } from "react-router-dom";
import { modalActions } from "../store/Slices/ModalSlice";
import { useDispatch } from "react-redux";
import { LocalPaths } from "../Paths/LocalPaths";

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
      case LocalPaths.location:
        return "Выбрать модель";
      case LocalPaths.model:
        return "Дополнительно";
      case LocalPaths.more:
        return "Итого";
      case LocalPaths.total:
        return "Заказать";
      default:
        return "Отменить";
    }
  };
  const setButtonDisable = (location: string) => {
    switch (location) {
      case LocalPaths.location:
        return !locationStep;
      case LocalPaths.model:
        return !modelStep;
      case LocalPaths.more:
        return !moreStep;
      case LocalPaths.total:
        return !totalStep;
      default:
        return true;
    }
  };
  const setHandleOnclick = (location: string) => {
    switch (location) {
      case LocalPaths.location:
        return () => navigate(LocalPaths.model);
      case LocalPaths.model:
        return () => navigate(LocalPaths.more);
      case LocalPaths.more:
        return () => navigate(LocalPaths.total);
      case LocalPaths.total:
        return () => handleOpenOrderModal();
      default:
        break;
    }
  };
  return { setButtonTitle, setButtonDisable, setHandleOnclick };
};

export default useButtonState;
