import React from "react";
import StoneSummary from "../stones/StoneSummary";
import { Link } from "react-router-dom";
import "../../css/paths/pathdetails.css";

const PathDetails = ({ id, title, stones }) => {
  const renderStones = () => {
    return stones.map((stone) => {
      return (
        <Link to={`/paths/${id}/stone/${stone.id}`}>
          <StoneSummary title={stone.title} />
        </Link>
      );
    });
  };

  return (
    <div className="pathDetails">
      <div className="pathDetails__header">
        <h2>{title}</h2>
        <div className="pathDetails__actions">
          <button>delete</button>
          <button>edit</button>
          <Link to={`/paths/${id}/stone/create`} className="pathDetails__btn">
            Add
          </Link>
        </div>
      </div>

      <div className="pathDetails__container">{renderStones()}</div>
    </div>
  );
};

export default PathDetails;
