import classes from "./App.module.scss";
import Router from "../../router/Router";
const App = () => {
  return (
    <div className={classes.app}>
      <Router />
    </div>
  );
};

export default App;
