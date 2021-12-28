import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardList } from "../../components/organisms/blogCard";
import { useAuth, useModalHelper } from "../../helpers";
import { getRecommendedBlogs } from "../../redux/features/home/home.slice";
import { FeedbackText, UserFeedbackContainer } from "./home.styled";
import Button from "../../components/atoms/button";

const RecommendedBlogs = () => {
  const dispatch = useDispatch();
  const { recommended, isLoading } = useSelector((state) => state.home);
  const { isLoggedIn } = useAuth();
  const { interests } = useSelector((state) => state.user.userInfo);
  const { openLogin, openInterests } = useModalHelper();

  useEffect(() => {
    if (!isLoggedIn || !interests.length) {
      return;
    }
    dispatch(getRecommendedBlogs({ tags: interests }));
  }, [dispatch, interests, isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <>
        <UserFeedbackContainer>
          <FeedbackText>To start seeing recommendations</FeedbackText>
          <Button onClick={openLogin}>Login</Button>
        </UserFeedbackContainer>
      </>
    );
  }

  if (!interests.length) {
    return (
      <>
        <UserFeedbackContainer>
          <FeedbackText>
            Tell us about your interests so we can show you recommendations
          </FeedbackText>
          <Button onClick={openInterests}>Update interests</Button>
        </UserFeedbackContainer>
      </>
    );
  }

  return <CardList blogs={recommended} isLoading={isLoading} />;
};

export default RecommendedBlogs;
