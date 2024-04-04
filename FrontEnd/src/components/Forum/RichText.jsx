import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const MyEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = new Quill(editorRef.current, {
      theme: 'snow',
      // Additional configuration options here
    });

    // Optional: Customize the editor's toolbar
    const toolbar = editor.getModule('toolbar');
    toolbar.addHandler('bold', () => {
      editor.format('bold', true);
    });
    // Add more custom toolbar handlers as needed

    return () => {
      editor.off('text-change');
      editor = null;
    };
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
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