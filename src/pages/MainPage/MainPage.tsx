import Main from "../../components/Main/Main";
import SideBar from "../../components/SideBar/SideBar";
import classes from "./MainPage.module.scss";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import Slider from "../../Slider/Slider";
const MainPage = () => {
  return (
    <section className={classes.mainPage}>
      <SideBar />
      <Main />
      <Slider />
      <BurgerMenu />
    </section>
  );
};

export default MainPage;
