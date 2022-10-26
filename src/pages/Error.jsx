import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-page">
      <h1>404 - Not Found!</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default Error;
