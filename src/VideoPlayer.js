import React from "react";
import { Player, BigPlayButton, ControlBar } from "video-react";
import "video-react/dist/video-react.css";

const VideoPlayer = () => (
  <div onContextMenu={(e) => e.preventDefault()} className="doc-container">
    <Player fluid={false} width={480} height={272}>
      <BigPlayButton position="center" />
      <source src="https://ampprodassets.azureedge.net/ampassets/file_example_MOV_480_700kB.mov" />
      <ControlBar className="custom-control-video" />
    </Player>
  </div>
);

export default VideoPlayer;
