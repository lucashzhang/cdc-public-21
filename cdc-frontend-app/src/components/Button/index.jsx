import React from "react";
import "./styles.scss";

function Button({ className, children, onClick, id }) {
  return (
    <button
      className={`Button ${className || ""}`}
      id={id || ""}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 304 352"
      >
        <path d="M2,88.602540 L152,2 302,88.602540 v173.215081 L152,350.410161 2,261.807621 z" />
      </svg>
      <div className="buttonText">{children}</div>
    </button>
  );
}

export function ButtonLink({ className, children, to, id }) {
  return (
    <a
      className={`Button ${className || ""}`}
      id={id || ""}
      href={to}
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 304 352"
      >
        <path d="M2,88.602540 L152,2 302,88.602540 v173.215081 L152,350.410161 2,261.807621 z" />
      </svg>
      <div className="buttonText">{children}</div>
    </a>
  );
}

export default Button;
