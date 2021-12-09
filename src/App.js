import { Outlet } from "react-router-dom";
import NavBar from "./components/organisms/navbar";

const App = () => {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
