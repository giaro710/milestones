import React, { useState } from "react";
import { connect } from "react-redux";
import "../../css/paths/createstone.css";

const CreateStone = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const pathId = props.match.params.pathid;

  console.log(title);
  console.log(pathId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStone = {
      title,
      content,
    };
    console.log(newStone);
  };

  return (
    <div className="createStone">
      <h1>Create Stone page</h1>

      <form onSubmit={handleSubmit}>
        <div className="createStone__field">
          <label htmlFor="title">Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            className="createStone__input"
            id="title"
            name="title"
            autoComplete="off"
          />
        </div>

        <div className="createStone__field">
          <label htmlFor="content">Content</label>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            id="content"
            name="content"
            className="onSubmit={handleSubmit}"
            autoComplete="off"
          ></textarea>
        </div>

        <input type="submit" className="createStone__submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateStone;
