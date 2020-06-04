import React from "react";
import sample from "./Sample.pdf";
import sampleKA from "./covid-KA.pdf";
import "./App.css";
import "video-react/dist/video-react.css";
import PDFViewer from "./PDFViewer";
import { Player, BigPlayButton } from "video-react";

const App = () => {
  return (
    <div>
      <PDFViewer file={sample} />
      <hr />
      <PDFViewer file={sampleKA} />
      <hr />
      <div onContextMenu={(e) => e.preventDefault()} className="doc-container">
        <Player fluid={false} width={480} height={272}>
          <BigPlayButton position="center" />
          <source src="https://ampprodassets.azureedge.net/ampassets/file_example_MOV_480_700kB.mov" />
        </Player>
      </div>
      <hr />
    </div>
  );
};

export default App;
