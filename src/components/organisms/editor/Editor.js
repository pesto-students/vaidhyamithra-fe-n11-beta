import PropTypes from "prop-types";
import { useQuill } from "react-quilljs";
// import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import { useEffect } from "react";
import { toolbarOptions } from "./editor.constants";
import { StyledEditorContainer } from "./editor.styled";

const Editor = ({ initialContent, handleChange }) => {
  const { quill, quillRef, Quill } = useQuill({
    modules: {
      magicUrl: true,
      toolbar: toolbarOptions,
    },
    placeholder: "Start typing here...",
  });

  if (Quill && !quill) {
    // For executing this line only once.
    const MagicUrl = require("quill-magic-url").default;
    Quill.register("modules/magicUrl", MagicUrl);
  }

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        handleChange(quill.root.innerHTML);
      });

      if (initialContent) {
        quill.clipboard.dangerouslyPasteHTML(initialContent);
      }
    }
  }, [quill, quillRef, initialContent, handleChange]);

  return (
    <div style={{ width: "100%", height: "calc(100% - 80px)" }}>
      <div ref={quillRef} />
    </div>
  );
};

const StyledEditor = ({ initialContent, handleChange }) => (
  <StyledEditorContainer>
    <Editor initialContent={initialContent} handleChange={handleChange} />
  </StyledEditorContainer>
);

const editorPropTypes = {
  initialContent: PropTypes.string,
  handleChange: PropTypes.func,
};

const editorDefaultProps = {
  initialContent: "",
  handleChange: () => {},
};

StyledEditor.propTypes = editorPropTypes;
Editor.propTypes = editorPropTypes;

StyledEditor.defaultProps = editorDefaultProps;
Editor.defaultProps = editorDefaultProps;

export default StyledEditor;
