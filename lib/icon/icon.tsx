import * as React from "react";
import "./importIcons.js";
import "./icon.scss";
import classes from "../helper/classes";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({
  className,
  name,
  ...restProps
}) => (
  <span>
    <svg className={classes("fui-icon", className)} {...restProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  </span>
);
export default Icon;
