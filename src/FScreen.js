import React, { useState } from "react";
import Fullscreen from "react-full-screen";

const FScreen = ({ children }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsFullScreen(true)}>Go Fullscreen</button>

      <Fullscreen
        enabled={isFullScreen}
        onChange={(isFullScreen) => setIsFullScreen(isFullScreen)}
      >
        <div className="full-screenable-node">{children}</div>
      </Fullscreen>
    </div>
  );
};

export default FScreen;
