import React from "react";
import sample from "./Sample.pdf";
import sampleKA from "./covid-KA.pdf";
import "./App.css";
import PDFViewer from "./PDFViewer";
import VideoPlayer from "./VideoPlayer";

const App = () => {
  return (
    <div>
      <PDFViewer file={sample} />
      <hr />
      <PDFViewer file={sampleKA} />
      <hr />
      <VideoPlayer />
      <hr />
    </div>
  );
};

export default App;
