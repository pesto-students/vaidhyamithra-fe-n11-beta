import { ROUTES } from "./values/routes";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Link to={ROUTES.HOME}>Home</Link>
      <br />
      <Link to={ROUTES.LOGIN}>Login</Link>
      <br />
      <Link to={ROUTES.SIGNUP}>Signup</Link>
      <br />
      <Link to={ROUTES.NOT_FOUND}>NOT_FOUND</Link>
      <br />
      <Outlet />
    </>
  );
};

export default App;
