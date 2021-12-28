import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModalHelper } from "../../../helpers";
import { MODAL_TYPES } from "../../../redux/features/modals/modals.congif";
import { getAllTags } from "../../../redux/features/tags/tags.slice";
import { updateUserInfo } from "../../../redux/features/user/user.slice";
import Button, { BUTTON_VARIANTS } from "../../atoms/button";
import Modal from "../../molecules/modal";
import { Info, Confirmation } from "./interestsModal.styled";

const InterestsModal = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const { modalType } = useSelector((state) => state.modals);
  const { tags } = useSelector((state) => state.tag);
  const { closeModal } = useModalHelper();
  const { id, interests } = useSelector((state) => state.user.userInfo);
  const [selectedTags, setSelectedTags] = useState([]);
  // Use selectedTags to update the userInfo

  useEffect(() => {
    setOpen(modalType === MODAL_TYPES.INTERESTS);
    dispatch(getAllTags());
  }, [dispatch, modalType]);

  useEffect(() => {
    setSelectedTags(interests);
  }, [interests]);

  const getVariant = (tagName) => {
    if (selectedTags.includes(tagName)) {
      return BUTTON_VARIANTS.CONTAINED;
    }
    return BUTTON_VARIANTS.OUTLINED;
  };

  const updateSelectedTags = (tagName) => {
    let indx = selectedTags.findIndex((tag) => tag === tagName);
    if (indx === -1) {
      setSelectedTags([...selectedTags, tagName]);
      return;
    }
    if (indx !== -1) {
      let tagsCopy = [...selectedTags];
      tagsCopy.splice(indx, 1);
      setSelectedTags(tagsCopy);
    }
  };

  const updateInterests = () => {
    let dataToUpdate = {
      userId: id,
      interests: selectedTags,
    };
    dispatch(updateUserInfo(dataToUpdate))
      .unwrap()
      .then(() => {
        closeModal();
      });
  };

  return (
    <>
      <Modal
        open={open}
        onClose={closeModal}
        title="What topics are you interested in?"
      >
        <Info>
          Let us know atleast three topics you are interested in. This helps our
          recommendation engine learn your interests better and helps serve you
          more relevant blogs.
        </Info>
        {tags.map((tag, key) => (
          <Button
            key={key}
            variant={getVariant(tag.tagName)}
            sx={{ mr: "0.625rem", mb: "0.625rem" }}
            onClick={() => updateSelectedTags(tag.tagName)}
          >
            {tag.tagName}
          </Button>
        ))}
        <Confirmation>
          <Button onClick={closeModal} variant={BUTTON_VARIANTS.TEXT}>
            Skip
          </Button>
          <Button onClick={updateInterests}>Continue</Button>
        </Confirmation>
      </Modal>
    </>
  );
};

export default InterestsModal;
