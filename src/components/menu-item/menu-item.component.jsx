import React from "react";
import "./menu-item.style.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  // console.log("trong menu item", match);
  //console.log(linkUrl);
  function navigate() {
    console.log(match.url);
    history.push(linkUrl);
  }
  return (
    <div className={`${size} menu-item`} onClick={() => navigate()}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
