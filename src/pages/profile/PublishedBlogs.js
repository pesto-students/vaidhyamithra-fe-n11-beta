import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardList } from "../../components/organisms/blogCard";
import { getPublishedBlogs } from "../../redux/features/profile/profile.slice";

const PublishedBlogs = ({ userId }) => {
  const dispatch = useDispatch();
  const { published, isLoading } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getPublishedBlogs({ userId }));
  }, [dispatch, userId]);

  return <CardList blogs={published} isLoading={isLoading} />;
};

PublishedBlogs.propTypes = {
  userId: PropTypes.string.isRequired,
};

PublishedBlogs.defaultProps = {};

export default PublishedBlogs;
