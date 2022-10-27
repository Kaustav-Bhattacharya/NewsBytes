import React from "react";
import NotFound from "./utils/404-Animation.gif";

export default function SomethingBroke() {
  return (
    <div className="container">
      <div className="row text-center" style={{ marginTop: "90px" }}>
        <div className="col-lg-12">
          <img
            src={NotFound}
            className="img-responsive center-block d-block mx-auto"
            alt="404-Not-Found"
          />
        </div>
      </div>
    </div>
  );
}
