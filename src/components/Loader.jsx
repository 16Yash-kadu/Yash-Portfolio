import React from "react";

import "./App.css"; // Create a separate CSS file for loader styles

const Loader = () => {
  return (
    <div className="loader">
      {/* You can use any spinner or loading animation here */}
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
