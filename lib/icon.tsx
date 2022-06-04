import * as React from "react";
import "./icons/wechart.svg";
import "./icons/qq.svg";

interface IconProps {
  //   name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      <svg>
        <use xlinkHref="#wechart" />
      </svg>
      <svg>
        <use xlinkHref="#qq" />
      </svg>
    </span>
  );
};

export default Icon;
