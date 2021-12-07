import { ROUTES } from "./values/routes";
import { Link, Outlet } from "react-router-dom";
import NavBar from "./components/organisms/navbar";
const App = () => {
  return (
    <>
      {/* <Link to={ROUTES.HOME}>Home</Link>
      <br />
      <Link to={ROUTES.LOGIN}>Login</Link>
      <br />
      <Link to={ROUTES.SIGNUP}>Signup</Link>
      <br />
      <Link to={ROUTES.NOT_FOUND}>NOT_FOUND</Link>
      <br />
      <Outlet /> */}
      <NavBar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
