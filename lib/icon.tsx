import * as React from "react";
import "./importIcons.js";
import "./icon.scss";
import classes from "./helper/classes";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  console.log(props.className);
  const { className, ...restProps } = props;

  return (
    <span>
      <svg className={classes("fui-icon", props.className)} {...restProps}>
        <use xlinkHref={`#${props.name}`} />
      </svg>
    </span>
  );
};

export default Icon;
