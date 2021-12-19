import { Outlet } from "react-router-dom";
import Snackbar from "../../molecules/snackbar";
import Navbar from "../navbar";
import LoginModal from "../../organisms/login";

const AppSkeleton = () => (
  <>
    <Navbar />
    <div>
      <Outlet />
    </div>
    <Snackbar />
    <LoginModal />
  </>
);

export default AppSkeleton;
