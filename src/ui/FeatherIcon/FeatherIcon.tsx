import React from "react";
import feather from "feather-icons";
import s from './FeatherIcon.module.css';

export const FeatherIcon: React.FunctionComponent<{
  name: string;
  svgAttrs?: {
    color?: string;
    fill?: string;
    width?: number;
    height?: number;
    "stroke-width"?: number;
    "stroke-linecap"?: string;
    "stroke-linejoin"?: string;
  };
  style?: React.CSSProperties;
}> = ({ name, svgAttrs, ...props }) => {
  return (
    <i
      {...props}
      className={s.icon}
      dangerouslySetInnerHTML={{ __html: feather.icons[name].toSvg(svgAttrs) }}
    ></i>
  );
};
