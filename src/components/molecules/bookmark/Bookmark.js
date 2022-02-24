import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Ficon from "../../atoms/featherIcon";
import FilledBookmarkIcon from "../../../assets/icons/bookmark.svg";
import { IconContainer } from "./Bookmark.styled";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../helpers";
import {
  deleteBookmark,
  saveBookmark,
} from "../../../redux/features/blog/blog.slice";
import { getSavedBlogs } from "../../../redux/features/user/user.slice";
import { setAlert } from "../../../redux/features/alerts/alerts.slice";
import { alertTypes } from "../snackbar";

const Bookmark = ({ blogId }) => {
  const {
    bookmarks,
    userInfo: { id: userId },
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { authenticatedFunction } = useAuth();

  const isBookmarked = bookmarks.map(({ _id }) => _id).includes(blogId);

  const bookmarkSave = () => {
    dispatch(saveBookmark({ userId, blogId }))
      .unwrap()
      .then(() => {
        dispatch(getSavedBlogs({ userId }));
        dispatch(
          setAlert({
            text: "Saved bookmark",
            type: alertTypes.success,
          })
        );
      });
  };

  const bookmarkDelete = () => {
    dispatch(deleteBookmark({ userId, blogId }))
      .unwrap()
      .then(() => {
        dispatch(getSavedBlogs({ userId }));
        dispatch(
          setAlert({
            text: "Deleted bookmark",
            type: alertTypes.success,
          })
        );
      });
  };

  return (
    <IconContainer>
      {isBookmarked ? (
        <img
          src={FilledBookmarkIcon}
          alt="bookmarked"
          onClick={() => authenticatedFunction(bookmarkDelete)}
        />
      ) : (
        <Ficon
          icon="bookmark"
          handleClick={() => authenticatedFunction(bookmarkSave)}
        />
      )}
    </IconContainer>
  );
};

Bookmark.propTypes = {
  blogId: PropTypes.string.isRequired,
};

export default Bookmark;
