import React from "react";
import { Link } from "react-router-dom";

export default function NavPages(props) {
  return (
    <div>
      <Link className="pure-button page-title" to={props.route}>
        <i className="fa fa-arrow-left" aria-hidden="true" />
      </Link>
      <h2 className="page-title">{props.title}</h2>
      <hr />
    </div>
  );
}
