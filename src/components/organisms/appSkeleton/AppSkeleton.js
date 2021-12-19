import { Outlet } from "react-router-dom";
import Snackbar from "../../molecules/snackbar";
import Navbar from "../navbar";

const AppSkeleton = () => (
  <>
    <Navbar />
    <div>
      <Outlet />
    </div>
    <Snackbar />
  </>
);

export default AppSkeleton;
