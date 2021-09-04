import React from "react";

export  function errorMessage(msg) {
  return (
    <div>
      <div className="alert alert-danger" role="alert">
      {msg}
      </div>
    </div>
  );
}
export  function successMessage(msg) {
  return (
    <div>
      <div className="alert alert-success" role="alert">
      {msg}
      </div>
    </div>
  );
}