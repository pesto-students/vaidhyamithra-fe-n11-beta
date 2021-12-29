import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardList } from "../../components/organisms/blogCard";
import { getSavedBlogs } from "../../redux/features/user/user.slice";

const SavedBlogs = ({ userId }) => {
  const dispatch = useDispatch();
  const { bookmarks, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getSavedBlogs({ userId }));
  }, [dispatch, userId]);

  return <CardList blogs={bookmarks} isLoading={isLoading} />;
};

SavedBlogs.propTypes = {
  userId: PropTypes.string.isRequired,
};

SavedBlogs.defaultProps = {};

export default SavedBlogs;
