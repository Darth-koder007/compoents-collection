import React from "react";
import sample from "./Sample.pdf";
import sampleKA from "./covid-KA.pdf";
import "./App.css";
import PDFViewer from "./PDFViewer";

const App = () => {
  return (
    <div>
      <PDFViewer file={sample} />
      <hr />
      <PDFViewer file={sampleKA} />
      {/* <FScreen>
        <div className="doc-container">
          <Document
            file={sample}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            <Page pageNumber={pageNumber} className="custom-page" />
            <p className="nav-controls">
              <button
                type="button"
                onClick={() => setPageNumber(pageNumber - 1)}
              >
                Prev
              </button>
              <span>
                Page {pageNumber} of {numPages}
              </span>
              <button
                type="button"
                onClick={() => setPageNumber(pageNumber + 1)}
              >
                Next
              </button>
            </p>
          </Document>
        </div>
      </FScreen>
      <hr />
      <FScreen>
        <div className="doc-container">
          <Document
            file={sampleKA}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            <Page pageNumber={pageNumber} />
            <p className="nav-controls">
              <button
                type="button"
                onClick={() => setPageNumber(pageNumber - 1)}
              >
                Prev
              </button>
              <span>
                Page {pageNumber} of {numPages}
              </span>
              <button
                type="button"
                onClick={() => setPageNumber(pageNumber + 1)}
              >
                Next
              </button>
            </p>
          </Document>
        </div>
      </FScreen> */}
    </div>
  );
};

export default App;
