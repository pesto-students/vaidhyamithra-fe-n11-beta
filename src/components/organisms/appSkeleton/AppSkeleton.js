import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

const AppSkeleton = () => (
  <>
    <Navbar />
    <div>
      <Outlet />
    </div>
  </>
);

export default AppSkeleton;
