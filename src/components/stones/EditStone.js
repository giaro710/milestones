import React, { useState } from "react";
import { connect } from "react-redux";

const EditStone = (props) => {
  const [title, setTitle] = useState(`${props.stone.title}`);
  const [content, setContent] = useState(`${props.stone.content}`);

  const pathId = props.match.params.pathid;

  console.log(props);

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
      <h1>Edit Stone page</h1>

      <form onSubmit={handleSubmit}>
        <div className="createStone__field">
          <label htmlFor="title"></label>
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
          <label htmlFor="content"></label>
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

const mapStateToProps = (state, ownProps) => {
  const path = state.paths.paths[ownProps.match.params.pathid - 1];
  const stone = path.stones[ownProps.match.params.stoneid - 1];
  return { stone };
};

export default connect(mapStateToProps)(EditStone);
