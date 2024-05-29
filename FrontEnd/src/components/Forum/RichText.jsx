import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const MyEditor = ({ onEditorChange }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = new Quill(editorRef.current, {
      theme: 'snow',
      // Additional configuration options here
    });

    const handleTextChange = () => {
      const updatedContent = editor.root.innerHTML;
      onEditorChange(updatedContent);
    };

    editor.on('text-change', handleTextChange);

    return () => {
      editor.off('text-change', handleTextChange);
      editor.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div ref={editorRef} className="quill-editor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEditor;
