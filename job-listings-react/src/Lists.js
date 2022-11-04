import React from "react";
import { useState } from "react";
import data from "./data.json";

const Lists = () => {
  const [info, setInfo] = useState(data);
  if (info === "") {
    setInfo(data);
  }
  return info.map((element) => {
    return (
      <div className="card">
        <img src={element.logo} alt="" />
        <div className="job">
          <div className="lineOne">
            <span className="company">{element.company}</span>
            {element.new && <span className="new">NEW!</span>}
            {element.featured && <span className="featured">FEATURED</span>}
          </div>
          <div className="lineTwo">{element.position}</div>
          <div className="lineThree">
            <span>{element.postedAt}</span>
            <span>・</span>
            <span>{element.contract}</span>
            <span>・</span>
            <span>{element.location}</span>
          </div>
        </div>
        <div className="skill">
          {element.languages.map((lan) => (
            <span>{lan}</span>
          ))}
        </div>
      </div>
    );
  });
};

export default Lists;
