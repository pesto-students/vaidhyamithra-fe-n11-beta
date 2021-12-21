import { Outlet } from "react-router-dom";
import Snackbar from "../../molecules/snackbar";
import Navbar from "../navbar";
import LoginModal from "../../organisms/login";
import SignUpModal from "../../organisms/signUp";
import InterestsModal from "../../organisms/interestedTopics";

const AppSkeleton = () => (
  <>
    <Navbar />
    <div>
      <Outlet />
    </div>
    <Snackbar />
    <LoginModal />
    <SignUpModal />
    <InterestsModal />
  </>
);

export default AppSkeleton;
