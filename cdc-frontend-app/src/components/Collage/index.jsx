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

function CollageItem({ children, color, position, size = '20%' }) {
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
      <CollageItem color="secondary" position={{ top: '50%', left: '30%' }} size="28%">
        <BeakerIcon />
      </CollageItem>
      <CollageItem
        color="accent1"
        position={{ top: '20%', right: '20%' }}
        size='40%'
      >
        <CalculatorIcon />
      </CollageItem>
      <CollageItem
        color="accent2"
        position={{ bottom: '22%', right: '22%' }}
        size='22%'
      >
        <ChartPieIcon />
      </CollageItem>
      <CollageItem color="accent3" position={{ bottom: '48%', left: '24%' }} size="22%">
        <BookOpenIcon />
      </CollageItem>
      <CollageItem
        color="accent4"
        position={{ bottom: '30%', left: '10%' }}
        size='25%'
      >
        <CodeIcon />
      </CollageItem>
    </div>
  );
}

export default Collage;
