import React from "react";
import "../../css/landing/Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__container landing__container--first">
        <div className="landing__headers">
          <h1>Milestones</h1>
          <p>The Life Journal</p>
        </div>

        <div className="landing__arrow"></div>
      </div>

      <div className="landing__container landing__container--second">
        <div className="landing__paragraphs">
          <p className="landing__paragraph--description">
            Life is a sequence of experiences. Some make us rejoice, other weep,
            some reflect, other make us laugh.
          </p>
          <p className="landing__paragraph--description">
            If we are who we are we owe it to our experiences. Understand the
            past is the first step to have a brighter future.
          </p>
        </div>

        <div className="landing__arrow"></div>
      </div>

      <div className="landing__container landing__container--third">
        <div className="landing__final">
          <div className="landing__final--paragraph">
            <p>
              Milestones wants to help you to think about those moments. Each
              hexagon is an experience. Fix it writing your thoughts.
            </p>
          </div>

          <div className="landing__final--sentence">
            <p>
              Milestones is a diary of the key moments in life, the milestones
              that have marked our journey up to here.{" "}
            </p>
          </div>

          <div className="landing__btn">
            <button>Discover</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
