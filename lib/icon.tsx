import * as React from "react";
import "./importIcons.js";
import "./icon.scss";

interface IconProps {
  name: string;
  onClick: () => void;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      <svg className="fui-icon" onClick={props.onClick}>
        <use xlinkHref={`#${props.name}`} />
      </svg>
    </span>
  );
};

export default Icon;
