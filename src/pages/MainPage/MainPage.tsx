import Main from "../../components/Main/Main";
import SideBar from "../../components/SideBar/SideBar";
import classes from "./MainPage.module.scss";
import Modal from "../../components/Modal/Modal";
const MainPage = () => {
  return (
    <section className={classes.mainPage}>
      <SideBar />
      <Main />
      <Modal />
    </section>
  );
};

export default MainPage;
