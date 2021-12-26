import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardList } from "../../components/organisms/blogCard";
import { getDraftBlogs } from "../../redux/features/profile/profile.slice";

const DraftBlogs = ({ userId }) => {
  const dispatch = useDispatch();
  const { drafts, isLoading } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getDraftBlogs({ userId }));
  }, [dispatch, userId]);

  return <CardList blogs={drafts} isLoading={isLoading} />;
};

DraftBlogs.propTypes = {
  userId: PropTypes.string.isRequired,
};

DraftBlogs.defaultProps = {};

export default DraftBlogs;
