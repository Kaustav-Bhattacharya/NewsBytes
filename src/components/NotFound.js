import React from "react";
import loading from "./utils/notFound.gif";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container">
      <div  className="row text-center" style={{ marginTop: "90px" }}>
        <div className="col-lg-12">
          <Link to='/'>
            <img
              src={loading}
              className="img-responsive center-block d-block mx-auto"
              alt="404-Not-Found"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
