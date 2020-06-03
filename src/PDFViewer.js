import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import FScreen from "./FScreen";

const PDFViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <FScreen>
        <div className="doc-container">
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
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
    </div>
  );
};

export default PDFViewer;
