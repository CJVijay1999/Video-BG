import React from "react";
import videoBG from "../assets/videoBg.mp4";
const Main = () => {
  return (
    <div className="Main">
      <div className="overlay"></div>
      <video src={videoBG} autoPlay loop muted />
      <div className="content">
        <h1>Welcome</h1>
        <p>This is new Place to vist,</p>
      </div>
    </div>
  );
};

export default Main;
