import React from "react";
import theme from "../../utilities/theme.module.scss";
import "./styles.scss";

function CollageItem({ children, color, position, size=10 }) {
  return (
    <div className="CollageItem" style={{ ...position, width: `${size}rem` }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 304 352"
        fill={theme[color]}
      >
        <path d="M2,88.602540 L152,2 302,88.602540 v173.215081 L152,350.410161 2,261.807621 z" />
      </svg>
      <div className="collage-item-text" style={{ fontSize: `${size - 2}rem`}}>{children}</div>
    </div>
  );
}

function Collage() {
  return (
    <div className="Collage">
      <CollageItem
        color="secondary"
        position={{ top: 360, left: 300 }}
      >L</CollageItem>
      <CollageItem color="accent1" position={{ top: 140, right: 200 }} size={16}>U</CollageItem>
      <CollageItem color="accent2" position={{ bottom: 180, right: 160 }} size={12}>C</CollageItem>
      <CollageItem color="accent3" position={{ bottom: 300, left: 200 }}>A</CollageItem>
      <CollageItem color="accent4" position={{ bottom: 140, left: 200 }} size={8}>S</CollageItem>
    </div>
  );
}

export default Collage;
