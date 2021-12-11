import PropTypes from "prop-types";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import { useEffect } from "react";
import { toolbarOptions } from "./editor.constants";
import { StyledEditorContainer } from "./editor.styled";

const Editor = ({ initialContent }) => {
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
        console.log("Text change!");
        console.log(quill.root.innerHTML);
      });

      if (initialContent) {
        quill.clipboard.dangerouslyPasteHTML(initialContent);
      }
    }
  }, [quill, quillRef, initialContent]);

  return (
    <div style={{ width: "100%", height: "calc(100% - 80px)" }}>
      <div ref={quillRef} />
    </div>
  );
};

const StyledEditor = ({ initialContent }) => (
  <StyledEditorContainer>
    <Editor initialContent={initialContent} />
  </StyledEditorContainer>
);

const editorPropTypes = {
  initialContent: PropTypes.string,
};

StyledEditor.propTypes = editorPropTypes;
Editor.propTypes = editorPropTypes;

export default StyledEditor;
