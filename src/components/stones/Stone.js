import React from "react";
import { connect } from "react-redux";

const Stone = ({ stone }) => {
  if (stone) {
    return (
      <div className="stone">
        <div className="stone__header">
          <h1>{stone.title}</h1>
        </div>
        <div className="stone__content">
          <p>{stone.content}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="stone">
        <p>NOT FOUND</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const path = state.paths.paths[ownProps.match.params.pathid - 1];
  const stone = path.stones[ownProps.match.params.stoneid - 1];
  return { stone };
};

export default connect(mapStateToProps)(Stone);
