import { Outlet } from "react-router-dom";
import Snackbar from "../../molecules/snackbar";
import Navbar from "../navbar";
import LoginModal from "../../organisms/login";
import SignUpModal from "../../organisms/signUp";
import InterestsModal from "../../organisms/interestedTopics";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../../helpers";
import { getSavedBlogs } from "../../../redux/features/user/user.slice";
import { useEffect } from "react";

const AppSkeleton = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const { id: userId } = useSelector((state) => state.user.userInfo);

  // Saved blogs are needed site wide
  // to show the user saved bookmark icon and otherwise
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getSavedBlogs({ userId }));
    }
  }, [dispatch, isLoggedIn, userId]);

  return (
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
};

export default AppSkeleton;
