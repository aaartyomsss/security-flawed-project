import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import {
  Button,
  Form,
  InputGroup,
} from '../../../node_modules/react-bootstrap/esm/index';
import { convertToHTML } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './AddPost.css';
import { createNewPost } from '../../api/gallery';
import { useNavigate } from 'react-router-dom';
import useToast from '../../components/Toasts';

const AddPost = () => {
  const navigate = useNavigate();
  const { notifySuccess, notifyError } = useToast();
  const [title, setTitle] = useState<string>('');
  const [file, setFile] = useState<File>();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const _file = target.files![0];
    setFile(_file);
  };

  const onSubmit = async () => {
    const formData = new FormData();
    const state = editorState.getCurrentContent();
    const description = convertToHTML(state);
    formData.append('title', title);
    formData.append('description', description);
    if (file) formData.append('image', file);
    try {
      await createNewPost(formData);
      notifySuccess('Created successfully');
      navigate('/gallery');
    } catch (error) {
      notifyError(
        'Something has happend. Check if all the data is entred correctly.'
      );
    }
  };

  return (
    <div className="add-post-container">
      <InputGroup className="mb-3">
        <InputGroup.Text />
        <Form.Control
          placeholder="Title"
          aria-label="title"
          aria-describedby="basic-addon1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </InputGroup>
      <div>Write an extensive description</div>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <InputGroup className="mb-3">
        <InputGroup.Text />
        <Form.Control
          placeholder="Image"
          aria-label="image"
          aria-describedby="basic-addon1"
          type="file"
          onChange={onImageChange}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Button className="post-button" onClick={onSubmit}>
          Post!
        </Button>
      </InputGroup>
    </div>
  );
};

export default AddPost;
