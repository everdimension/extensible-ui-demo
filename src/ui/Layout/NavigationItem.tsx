import React from "react";
import { MenuItem } from "@blueprintjs/core";
import { FeatherIcon } from "../../ui/FeatherIcon";

export function NavigationItem({
  onNavigate,
  featherIcon,
  icon,
  iconColor,
  ...props
}: {
  onNavigate: (pathname: string) => void;
  featherIcon?: string;
  iconColor?: string;
} & MenuItem["props"]) {
  return (
    <MenuItem
      {...props}
      icon={
        icon ? (
          icon
        ) : featherIcon ? (
          <FeatherIcon
            style={{ marginTop: 2 }}
            name={featherIcon}
            svgAttrs={{ width: 16, height: 16, color: iconColor }}
          ></FeatherIcon>
        ) : (
          undefined
        )
      }
      onClick={event => {
        event.preventDefault();
        onNavigate(event.currentTarget.pathname);
        // history.push(event.currentTarget.pathname);
      }}
    />
  );
}
