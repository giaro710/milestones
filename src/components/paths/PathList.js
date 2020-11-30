import React, { useState } from "react";
import "../../css/paths/pathlist.css";
import HeaderStone from "../general/HeaderStone";
import PathDetails from "./PathDetails";
import { connect } from "react-redux";
import { createPath } from "../../store/actions/index";

const PathList = ({ paths, createPath }) => {
  const [newPathTitle, setNewPathTitle] = useState("");

  const renderPaths = () => {
    return paths.map((path) => {
      return (
        <PathDetails title={path.title} stones={path.stones} id={path.id} />
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPath({
      id: 9,
      title: newPathTitle,
      stones: [],
    });
  };

  return (
    <div className="pathlist">
      {/* Navbar */}
      <HeaderStone title="paths" />

      <form onSubmit={handleSubmit}>
        <div className="pathlist__field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="pathlist__input"
            onChange={(e) => setNewPathTitle(e.target.value)}
          />
        </div>
        <input type="submit" />
      </form>

      {renderPaths()}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.paths.paths);
  return { paths: state.paths.paths };
};

export default connect(mapStateToProps, { createPath })(PathList);
