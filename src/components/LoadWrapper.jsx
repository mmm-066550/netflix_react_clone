import React from "react";

export default function LoadWrapper() {
  return (
    <div
      className="load_wrapper d-flex justify-content-center align-items-center"
      style={{ height: "650px", overflow: "hidden !important" }}
    >
      <div
        className="spinner-grow"
        style={{ width: "10rem", height: "10rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
