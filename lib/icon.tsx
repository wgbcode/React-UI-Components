import * as React from "react";
import "./importIcons.js";
import "./icon.scss";

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      <svg className="fui-icon">
        <use xlinkHref={`#${props.name}`} />
      </svg>
    </span>
  );
};

export default Icon;
