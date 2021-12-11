import React from "react";
import Button, { BUTTON_VARIANTS } from "../../atoms/button";
import Modal from "../../molecules/modal";
import { Info, Confirmation } from "./interestedTopics.styled";

const InterestedTopics = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const topics = [
    { id: 1, topicName: "Cardiology" },
    { id: 2, topicName: "Bariatrics" },
    { id: 3, topicName: "Endocrinology" },
    { id: 4, topicName: "Hematology" },
    { id: 5, topicName: "Gastroenterology" },
    { id: 6, topicName: "Immunology" },
  ];

  return (
    <>
      <Button onClick={handleOpen}>Click me</Button>
      <Modal
        open={open}
        onClose={handleClose}
        title="What topics are you interested in?"
      >
        <Info>
            Let us know atleast three topics you are 
            interested in. This helps our recommendation 
            engine learn your interests better and helps 
            serve you more relevant blogs.
        </Info>
          {topics.map((topic, key) => (
            <Button
              key={key}
              variant={BUTTON_VARIANTS.OUTLINED}
              sx={{ mr: "0.625rem", mb: "0.625rem" }}
            >
              {topic.topicName}
            </Button>
          ))}
        <Confirmation>
          <Button variant={BUTTON_VARIANTS.TEXT}>Skip</Button>
          <Button>Continue</Button>
        </Confirmation>
      </Modal>
    </>
  );
};

export default InterestedTopics;
