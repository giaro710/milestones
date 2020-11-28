import React from "react";
import "../../css/paths/pathlist.css";
import HeaderStone from "../general/HeaderStone";
import PathDetails from "./PathDetails";
import { connect } from "react-redux";

const PathList = ({ paths }) => {
  const renderPaths = () => {
    return paths.map((path) => {
      return (
        <PathDetails title={path.title} stones={path.stones} id={path.id} />
      );
    });
  };

  return (
    <div className="pathlist">
      {/* Navbar */}
      <HeaderStone title="paths" />

      <button>Add path</button>

      {renderPaths()}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.paths.paths);
  return { paths: state.paths.paths };
};

export default connect(mapStateToProps)(PathList);
