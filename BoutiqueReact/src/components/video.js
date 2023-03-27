import React from "react";
import MyVideo from "./vdo.mp4";

class MyVideoComponent extends React.Component {
  render() {
    return (
      <video width="20%" height="20%" preload="auto">
        <source src={MyVideo} type="video/mp4" />
      </video>
    );
  }
}

export default MyVideoComponent