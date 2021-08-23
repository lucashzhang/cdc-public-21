import React from "react";
import {
  BeakerIcon,
  CalculatorIcon,
  ChartPieIcon,
  BookOpenIcon,
  CodeIcon,
} from "@heroicons/react/outline";
import theme from "../../utilities/theme.module.scss";
import "./styles.scss";

function CollageItem({ children, color, position, size = "20%" }) {
  return (
    <div className="CollageItem" style={{ ...position, width: size }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 304 352"
        fill={theme[color]}
      >
        <path d="M2,88.602540 L152,2 302,88.602540 v173.215081 L152,350.410161 2,261.807621 z" />
      </svg>
      <div className="collage-item-text">{children}</div>
    </div>
  );
}

function Collage() {
  return (
    <div className="Collage">
      <CollageItem
        color="accent1"
        position={{ top: "14%", left: "46%" }}
        size="33%"
      >
        <CalculatorIcon />
      </CollageItem>
      <CollageItem
        color="accent4"
        position={{ top: "32%", left: "18%" }}
        size="25%"
      >
        <CodeIcon />
      </CollageItem>
      <CollageItem
        color="accent2"
        position={{ top: "13%", left: "31%" }}
        size="20%"
      >
        <ChartPieIcon />
      </CollageItem>
      <CollageItem
        color="accent3"
        position={{ top: "49%", left: "36%" }}
        size="22%"
      >
        <BookOpenIcon />
      </CollageItem>
      <CollageItem
        color="secondary"
        position={{ top: "47%", left: "68%" }}
        size="20%"
      >
        <BeakerIcon />
      </CollageItem>
    </div>
  );
}

export default Collage;
