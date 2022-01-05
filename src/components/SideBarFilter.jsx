import React, { useEffect } from "react";
import "../styles/movies-page.sass";

export default function SideBarFilter(props) {
  useEffect(() => {
    document.title = "Netflix | Popular Movies";
  }, []);
  return (
    <div className="col-3 left-sidebar">
      <div style={{ background: "teal" }}>....</div>
    </div>
  );
}
